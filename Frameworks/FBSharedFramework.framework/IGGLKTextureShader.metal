// Copyright 2004-present Facebook. All Rights Reserved.

#include <metal_stdlib>
using namespace metal;

#import "IGGLKTextureShaderTypes.h"

// Vertex shader input data
typedef struct {
    float2 position [[attribute(IGGLKTextureShaderVertexBufferIndexPosition)]];
    float2 texCoord [[attribute(IGGLKTextureShaderVertexBufferIndexTexCoord)]];
} VertexData;

// Fragment shader input data
typedef struct {
    float4 position [[position]];
    float2 texCoord;
} RasterizerData;

#pragma mark - Vertex Functions

vertex RasterizerData IGGLKTextureShaderVertex(VertexData vertexIn [[ stage_in ]],
                                               constant float4x4 &u_modelViewProjectionMatrix [[ buffer(IGGLKTextureShaderVertexBufferIndexMVPMatrix) ]])
{
    RasterizerData vertexOut;
    vertexOut.position = u_modelViewProjectionMatrix * float4(vertexIn.position, 0.0, 1.0);
    vertexOut.texCoord = vertexIn.texCoord;
    return vertexOut;
}

#pragma mark - Fragment Functions

fragment float4 IGGLKTextureShaderFragment(RasterizerData fragmentIn [[stage_in]],
                                           texture2d<float> u_texture [[ texture(IGGLKTextureShaderFragmentTextureIndexRGB) ]])
{
    constexpr sampler textureSampler (mag_filter::linear,
                                      min_filter::linear);

    const float4 colorSample = u_texture.sample(textureSampler, fragmentIn.texCoord);
    return colorSample;
}

fragment float4 IGGLKTextureShaderFragmentYUV(RasterizerData fragmentIn [[stage_in]],
                                              constant float4x4 &u_colorConversionMatrix [[ buffer(IGGLKTextureShaderFragmentBufferIndexColorConversionMatrix) ]],
                                              texture2d<float> u_lumaTexture [[ texture(IGGLKTextureShaderFragmentYUVTextureIndexLuma) ]],
                                              texture2d<float> u_chromaTexture [[ texture(IGGLKTextureShaderFragmentYUVTextureIndexChroma) ]])
{
    constexpr sampler textureSampler (mag_filter::linear,
                                      min_filter::linear);

    // Sample Y and CbCr textures to get the YCbCr color at the given texture coordinate
    float3 yuv;
    yuv.x = u_lumaTexture.sample(textureSampler, fragmentIn.texCoord).r;
    yuv.yz = u_chromaTexture.sample(textureSampler, fragmentIn.texCoord).rg;

    // Convert to RGB
    float4 rgba = u_colorConversionMatrix * float4(yuv, 1.0);

    // Return converted RGB color
    return rgba;
}

