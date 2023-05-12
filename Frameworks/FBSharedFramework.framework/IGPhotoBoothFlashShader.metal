// (c) Facebook, Inc. and its affiliates. Confidential and proprietary.

#include <metal_stdlib>
using namespace metal;

#import "Internal/IGPhotoBoothFlashShaderTypes.h"

namespace IGPhotoBoothFlashShader {

// Vertex shader input data
typedef struct {
    float2 position [[attribute(IGPhotoBoothFlashShaderVertexBufferIndexPosition)]];
    float2 texCoord [[attribute(IGPhotoBoothFlashShaderVertexBufferIndexTexCoord)]];
} VertexData;

// Fragment shader input data
typedef struct {
    float4 position [[position]];
    float2 texCoord;
} RasterizerData;

#pragma mark - Vertex Functions

vertex RasterizerData IGPhotoBoothFlashShaderVertex(VertexData vertexIn [[ stage_in ]],
                                                    constant float4x4 &u_modelViewProjectionMatrix [[ buffer(IGPhotoBoothFlashShaderVertexBufferIndexMVPMatrix) ]])
{
    RasterizerData vertexOut;
    vertexOut.position = u_modelViewProjectionMatrix * float4(vertexIn.position, 0.0, 1.0);
    vertexOut.texCoord = vertexIn.texCoord;
    return vertexOut;
}

#pragma mark - Fragment Functions

#define EXPOSURE_MULT 0.25

float3 exposure(float3 color, float amount)
{
    return color * pow(2.0, amount);
}

fragment float4 IGPhotoBoothFlashShaderFragment(RasterizerData fragmentIn [[stage_in]],
                                                texture2d<float> u_texture [[ texture(IGPhotoBoothFlashShaderFragmentTextureIndexTexture) ]],
                                                constant float &u_exposure [[ buffer(IGPhotoBoothFlashShaderFragmentBufferIndexExposure) ]])
{
    constexpr sampler textureSampler (mag_filter::linear,
                                      min_filter::linear);
    float4 color = u_texture.sample(textureSampler, fragmentIn.texCoord);
    color.rgb = exposure(color.rgb, u_exposure * EXPOSURE_MULT);
    return color;
}

} // namespace IGPhotoBoothFlashShader
