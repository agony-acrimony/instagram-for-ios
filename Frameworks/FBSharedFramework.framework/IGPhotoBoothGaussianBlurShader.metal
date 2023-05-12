// (c) Facebook, Inc. and its affiliates. Confidential and proprietary.

#include <metal_stdlib>
using namespace metal;

#import "Internal/IGPhotoBoothGaussianBlurShaderTypes.h"

namespace IGPhotoBoothGaussianBlurShader {

// Vertex shader input data
typedef struct {
    float2 position [[attribute(IGPhotoBoothGaussianBlurShaderVertexBufferIndexPosition)]];
    float2 texCoord [[attribute(IGPhotoBoothGaussianBlurShaderVertexBufferIndexTexCoord)]];
} VertexData;

// Fragment shader input data
typedef struct {
    float4 position [[position]];
    float2 texCoord;
} RasterizerData;

#pragma mark - Vertex Functions

vertex RasterizerData IGPhotoBoothGaussianBlurShaderVertex(VertexData vertexIn [[ stage_in ]])
{
    RasterizerData vertexOut;
    vertexOut.position = float4(vertexIn.position, 0.0, 1.0);
    vertexOut.texCoord = vertexIn.texCoord;
    return vertexOut;
}

#pragma mark - Fragment Functions

// Separable gaussian blur
// ------------------------------------------------------------
float sCurve(float x)
{
    x = x * 2.0 - 1.0;
    return -x * abs(x) * 0.5 + x + 0.5;
}

float4 blurDir(texture2d<float> source, float2 duv, float2 uv, float fradius)
{
    constexpr sampler textureSampler (mag_filter::linear,
                                      min_filter::linear);

    int radius = int(fradius);
    if (fradius >= 1.0)
    {
        float4 A = float4(0.0);
        float4 C = float4(0.0);
        float divisor = 0.0;
        float weight = 0.0;
        float radiusMultiplier = 1.0 / fradius;
        for (int xi = -radius; xi <= radius; xi+=2) {
            float x = float(xi);
            A = source.sample(textureSampler, uv + x * duv);
            weight = sCurve(1.0 - (abs(x) * radiusMultiplier));
            C.rgb += A.rgb * weight;
            divisor += weight;
        }
        return float4(C.rgb / divisor, 1.0);
    }
    return source.sample(textureSampler, uv);
}

// Main
// ------------------------------------------------------------
float getBlurMask(float2 renderSize, float2 texCoord)
{
    const float2 vignetteRatio = float2(1.0, 1.0);
    float2 res = vignetteRatio * renderSize / renderSize.y;
    float d = distance(texCoord * res, float2(0.5) * res);
    return smoothstep(0.25, 0.5, d);
}

fragment float4 IGPhotoBoothGaussianBlurShaderFragment(RasterizerData fragmentIn [[stage_in]],
                                                       texture2d<float> u_texture [[ texture(IGPhotoBoothGaussianBlurShaderFragmentTextureIndexTexture) ]],
                                                       constant float2 &u_renderSize [[ buffer(IGPhotoBoothGaussianBlurShaderFragmentBufferIndexRenderSize) ]],
                                                       constant float &u_blurDirectionX [[ buffer(IGPhotoBoothGaussianBlurShaderFragmentBufferIndexBlurDirectionX) ]],
                                                       constant float &u_blurDirectionY [[ buffer(IGPhotoBoothGaussianBlurShaderFragmentBufferIndexBlurDirectionY) ]],

                                                       constant float &u_blurAmount [[ buffer(IGPhotoBoothGaussianBlurShaderFragmentBufferIndexBlurAmount) ]],
                                                       constant float &u_vignetteAmount [[ buffer(IGPhotoBoothGaussianBlurShaderFragmentBufferIndexVignetteAmount) ]])
{
    float2 dir = float2(u_blurDirectionX, u_blurDirectionY);

    float blurMask = getBlurMask(u_renderSize, fragmentIn.texCoord);
    float mask = mix(1.0, blurMask, u_vignetteAmount);
    float4 color = blurDir(u_texture, dir / u_renderSize, fragmentIn.texCoord, mask * u_blurAmount);
    color.a = mask; // write mask on alpha channel for next pass

    return color;
}

} // namespace IGPhotoBoothGaussianBlurShader
