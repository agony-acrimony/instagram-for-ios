// (c) Facebook, Inc. and its affiliates. Confidential and proprietary.

#include <metal_stdlib>
using namespace metal;

#import "Internal/IGPhotoBoothLightLeakShaderTypes.h"

namespace IGPhotoBoothLightLeakShader {

// Vertex shader input data
typedef struct {
    float2 position [[attribute(IGPhotoBoothLightLeakShaderVertexBufferIndexPosition)]];
    float2 texCoord [[attribute(IGPhotoBoothLightLeakShaderVertexBufferIndexTexCoord)]];
    float2 leakCoord [[attribute(IGPhotoBoothLightLeakShaderVertexBufferIndexLeakCoord)]];
    float2 noiseCoord [[attribute(IGPhotoBoothLightLeakShaderVertexBufferIndexNoiseCoord)]];
} VertexData;

// Fragment shader input data
typedef struct {
    float4 position [[position]];
    float2 uv;
    float2 photoUv;
    float2 leakUv;
    float2 noiseUv;
    float4 noiseChannels;
    float noiseFlicker;
} RasterizerData;

#pragma mark - Vertex Functions

float random(float x)
{
    return fract(sin(x) * 43758.5453);
}

float poster(float val, float steps)
{
    return floor(val * steps) / steps;
}

float randomScale(float time)
{
    float t = poster(time, 8.0); // posterize time every 3 frames (1/8 second)
    float s = random(t); // randomize scale between 0-1
    return 1.0 / (1.0 + 0.008 * poster(s, 4.0)); // posterize scale to 5 intervals
}

float4 rgbaCycleRand(float time, float steps)
{
    float t = poster(time, steps);
    float rnd = random(t) * 4.0;
    float a = step(3.0, rnd);
    float b = (1.0 - a) * step(2.0, rnd);
    float g = (1.0 - a) * (1.0 - b) * step(1.0, rnd);
    float r = (1.0 - a) * (1.0 - b) * (1.0 - g);
    return float4(r, g, b, a);
}

vertex RasterizerData IGPhotoBoothLightLeakShaderVertex(VertexData vertexIn [[ stage_in ]],
                                                        constant float &u_Time [[ buffer(IGPhotoBoothLightLeakShaderVertexBufferIndexTime) ]],
                                                        constant float &u_LeakIndex [[ buffer(IGPhotoBoothLightLeakShaderVertexBufferIndexLeakIndex) ]])
{
    RasterizerData vertexOut;

    // Basic UV and position: 1-1 mapping with output
    vertexOut.uv = vertexIn.position * 0.5 + 0.5;
    vertexOut.position = float4(vertexIn.position, 0.0, 1.0);

    // Photo UV: apply random scaling
    float scale = randomScale(u_Time);
    vertexOut.photoUv = (vertexIn.texCoord - 0.5) * scale + 0.5; // scale from center

    // Leak UV: map index 0-3 to x,y offsets (leak texture contains 4 images)
    float2 leakOff = float2(fmod(u_LeakIndex, 2.0), floor(u_LeakIndex / 2.0));
    vertexOut.leakUv = vertexIn.leakCoord * 0.5 + 0.5 * leakOff;

    // Noise UV
    vertexOut.noiseUv = vertexIn.noiseCoord;

    // Noise flicker and channels
    float tFlicker = poster(u_Time, 7.3);
    vertexOut.noiseFlicker = 0.2 + 0.15 * random(tFlicker + 0.7281);
    vertexOut.noiseChannels = rgbaCycleRand(u_Time + 0.31, 6.0);

    return vertexOut;
}

#pragma mark - Fragment Functions

#define EXPOSURE_MULT 0.25
#define colorlut_height  (32.0)
#define colorlut_width  (colorlut_height*colorlut_height)

float4 colorLUT(float4 color, texture2d<float> lut, sampler textureSampler)
{
    const float4 uLutSize = float4(colorlut_width, colorlut_height, 1.0/colorlut_width, 1.0/colorlut_height);

    float3 scaledColor = color.xyz * (uLutSize.y - 1.0);
    float bFrac = fract(scaledColor.z);
    float2 texc = (0.5 + scaledColor.xy) * uLutSize.zw;
    texc.x += (scaledColor.z - bFrac) * uLutSize.w;

    float3 b0 = lut.sample(textureSampler, texc).xyz;
    float3 b1 = lut.sample(textureSampler, float2(texc.x + uLutSize.w, texc.y)).xyz;
    color.xyz = mix(b0, b1, bFrac);

    return color;
}

float3 exposure(float3 color, float amount)
{
    return color * pow(2.0, amount);
}

float sdBox(float2 uv, float2 size)
{
    float2 d = abs(uv) - size;
    return length(max(d, float2(0))) + min(max(d.x, d.y), 0.0);
}

fragment float4 IGPhotoBoothLightLeakShaderFragment(RasterizerData fragmentIn [[stage_in]],
                                                    texture2d<float> u_LUT [[ texture(IGPhotoBoothLightLeakShaderFragmentTextureIndexLUT) ]],
                                                    texture2d<float> u_Texture [[ texture(IGPhotoBoothLightLeakShaderFragmentTextureIndexTexture) ]],
                                                    texture2d<float> u_NoiseTexture [[ texture(IGPhotoBoothLightLeakShaderFragmentTextureIndexNoise) ]],
                                                    texture2d<float> u_LeakTexture [[ texture(IGPhotoBoothLightLeakShaderFragmentTextureIndexLeak) ]],
                                                    constant float2 &u_RenderSize [[ buffer(IGPhotoBoothLightLeakShaderFragmentBufferIndexRenderSize) ]],
                                                    constant float &u_Exposure [[ buffer(IGPhotoBoothLightLeakShaderFragmentBufferIndexExposure) ]],
                                                    constant float &u_LeakOpacity [[ buffer(IGPhotoBoothLightLeakShaderFragmentBufferIndexLeakOpacity) ]])
{
    constexpr sampler textureSampler (mag_filter::linear,
                                      min_filter::linear);

    // Sample photo
    float4 color = u_Texture.sample(textureSampler, fragmentIn.photoUv);

    // Apply LUT
    color = mix(color, colorLUT(color, u_LUT, textureSampler), 0.8);

    // Apply Exposure
    color.rgb = exposure(color.rgb, u_Exposure * EXPOSURE_MULT);

    // Blend noise texture
    float2 res = u_RenderSize / u_RenderSize.y;
    float2 noiseUv = fract(fragmentIn.noiseUv * res * 2.5);
    float4 noise = u_NoiseTexture.sample(textureSampler, noiseUv);
    float noiseVignette = distance(fragmentIn.uv, float2(0.5)) * 2.0;

    color.rgb += dot(noise, fragmentIn.noiseChannels) * fragmentIn.noiseFlicker * noiseVignette;
    color.rgb = clamp(color.rgb, float3(0.0), float3(1.0));

    // Blend light leaks
    float4 leak = u_LeakTexture.sample(textureSampler, fragmentIn.leakUv);
    color.rgb += leak.rgb * u_LeakOpacity;
    color.rgb = clamp(color.rgb, float3(0.0), float3(1.0));

    // Add rectangle vignette
    const float round = 0.04;
    const float feather = 0.25;
    float2 size = res * 0.5 - 0.12;
    float sdf = sdBox(fragmentIn.uv * res - float2(0.5) * res, size - round) - round;
    float vignette = smoothstep(feather, 0.0, sdf);
    color.rgb *= vignette;

    color.a = 1.0;
    return color;
}

} // namespace IGPhotoBoothLightLeakShader
