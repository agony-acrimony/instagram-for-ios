// (c) Facebook, Inc. and its affiliates. Confidential and proprietary.

#include <metal_stdlib>
using namespace metal;

#import "Internal/IGPhotoBoothBoxBlurShaderTypes.h"

namespace IGPhotoBoothBoxBlurShader {

// Vertex shader input data
typedef struct {
    float2 position [[attribute(IGPhotoBoothBoxBlurShaderVertexBufferIndexPosition)]];
    float2 texCoord [[attribute(IGPhotoBoothBoxBlurShaderVertexBufferIndexTexCoord)]];
} VertexData;

// Fragment shader input data
typedef struct {
    float4 position [[position]];
    float2 texCoord;
} RasterizerData;

#pragma mark - Vertex Functions

vertex RasterizerData IGPhotoBoothBoxBlurShaderVertex(VertexData vertexIn [[ stage_in ]])
{
    RasterizerData vertexOut;
    vertexOut.position = float4(vertexIn.position, 0.0, 1.0);
    vertexOut.texCoord = vertexIn.texCoord;
    return vertexOut;
}

#pragma mark - Fragment Functions

float4 boxFilter(texture2d<float> texture, float2 uv, float2 duv)
{
    constexpr sampler textureSampler (mag_filter::linear,
                                      min_filter::linear);

    float4 color;
    color  = texture.sample(textureSampler, uv + float2(-duv.x, -duv.y));
    color += texture.sample(textureSampler, uv + float2( duv.x, -duv.y));
    color += texture.sample(textureSampler, uv + float2(-duv.x,  duv.y));
    color += texture.sample(textureSampler, uv + float2( duv.x,  duv.y));
    return 0.25 * color;
}

fragment float4 IGPhotoBoothBoxBlurShaderFragment(RasterizerData fragmentIn [[stage_in]],
                                                  texture2d<float> u_texture [[ texture(IGPhotoBoothBoxBlurShaderFragmentTextureIndexTexture) ]],
                                                  constant float2 &u_textureSize [[ buffer(IGPhotoBoothBoxBlurShaderFragmentBufferIndexTextureSize) ]])
{
    return boxFilter(u_texture, fragmentIn.texCoord, 1.0 / u_textureSize);
}

} // namespace IGPhotoBoothBoxBlurShader
