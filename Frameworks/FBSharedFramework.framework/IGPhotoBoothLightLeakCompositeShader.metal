// (c) Facebook, Inc. and its affiliates. Confidential and proprietary.

#include <metal_stdlib>
using namespace metal;

#import "Internal/IGPhotoBoothLightLeakCompositeShaderTypes.h"

namespace IGPhotoBoothLightLeakCompositeShader {

// Vertex shader input data
typedef struct {
    float2 position [[attribute(IGPhotoBoothLightLeakCompositeShaderVertexBufferIndexPosition)]];
    float2 texCoord [[attribute(IGPhotoBoothLightLeakCompositeShaderVertexBufferIndexTexCoord)]];
} VertexData;

// Fragment shader input data
typedef struct {
    float4 position [[position]];
    float2 texCoord;
} RasterizerData;

#pragma mark - Vertex Functions

vertex RasterizerData IGPhotoBoothLightLeakCompositeShaderVertex(VertexData vertexIn [[ stage_in ]],
                                                                 constant float4x4 &u_MVPMatrix [[ buffer(IGPhotoBoothLightLeakCompositeShaderVertexBufferIndexMVPMatrix) ]])
{
    RasterizerData vertexOut;
    vertexOut.position = u_MVPMatrix * float4(vertexIn.position, 0.0, 1.0);
    vertexOut.texCoord = vertexIn.texCoord;
    return vertexOut;
}

#pragma mark - Fragment Functions

// FUNCTIONS FOR FONT DRAWING
#define CHAR_SPRITE_SIZE float2(160., 96.)
#define CHAR_SPRITE_GRID float2(5., 2.)
#define MAX_INT_DIGITS 2

#define CHAR_SIZE float2(32., 48.)
#define CHAR_SPACING float2(32., 48.)

#define STRWIDTH(c) (c * CHAR_SPACING.x)
#define STRHEIGHT(c) (c * CHAR_SPACING.y)

// Returns the pixel at uv in the given bit-packed sprite.
float sprite(float2 spr, float2 size, float2 uv, texture2d<float> fontTexture, sampler textureSampler)
{
    uv = floor(uv);

    // calcurate normalized width and height of the segment of character
    float2 segment = float2(CHAR_SIZE / CHAR_SPRITE_SIZE);
    float2 texImageSegUV = uv / size * segment;
    texImageSegUV += float2(
                          segment.x * float( int( fmod(spr.x, CHAR_SPRITE_GRID.x) ) ),
                          segment.y * float( int( fmod(spr.y, CHAR_SPRITE_GRID.y) ) )
                          );

    // Clipping bound to remove garbage outside the sprite's boundaries.
    float2 a = step(uv, size);
    float2 b = step(float2(0), uv);
    float2 c = a * b;
    float bounds = c.x * c.y;
    float pixels = fontTexture.sample(textureSampler, texImageSegUV).r;
    pixels = clamp(pixels, 0., 1.);
    return mix( 0.0, pixels, float(bounds));
}

// Prints a character and moves the print position forward by 1 character width.
float character(float2 ch, float2 uv, thread float2 &printPos, texture2d<float> fontTexture, sampler textureSampler)
{
    float px = sprite(ch, CHAR_SIZE, uv - printPos, fontTexture, textureSampler);
    printPos.x += CHAR_SPACING.x;
    return px;
}

//Returns the digit sprite for the given number.
float2 get_digit(float d)
{
    d = floor(d);
    return float2(d, 1.0 - step(d, CHAR_SPRITE_GRID.x - 1.0));
}

float get_decimal_digit(float number, int decimal_index, float2 uv, thread float2 &printPos, texture2d<float> fontTexture, sampler textureSampler)
{
    float decimals = pow(10.0, float(decimal_index));
    float digit = fmod( number / decimals , 10.0);
    return character(get_digit(digit), uv, printPos, fontTexture, textureSampler);
}

float print_two_integer(int number, float2 uv, thread float2 &printPos, texture2d<float> fontTexture, sampler textureSampler)
{
    float fnumber = float(number);
    float result = 0.0;
    result += get_decimal_digit(fnumber, 1, uv, printPos, fontTexture, textureSampler);
    result += get_decimal_digit(fnumber, 0, uv, printPos, fontTexture, textureSampler);
    return result;
}

fragment float4 IGPhotoBoothLightLeakCompositeShaderFragment(RasterizerData fragmentIn [[stage_in]],
                                                             texture2d<float> u_SourceTexture [[ texture(IGPhotoBoothLightLeakCompositeShaderFragmentTextureIndexSource) ]],
                                                             texture2d<float> u_BlurTexture [[ texture(IGPhotoBoothLightLeakCompositeShaderFragmentTextureIndexBlur) ]],
                                                             texture2d<float> u_FontTexture [[ texture(IGPhotoBoothLightLeakCompositeShaderFragmentTextureIndexFont) ]],
                                                             constant float2 &u_RenderSize [[ buffer(IGPhotoBoothLightLeakCompositeShaderFragmentBufferIndexRenderSize) ]],
                                                             constant float &u_Day [[ buffer(IGPhotoBoothLightLeakCompositeShaderFragmentBufferIndexDay) ]],
                                                             constant float &u_Month [[ buffer(IGPhotoBoothLightLeakCompositeShaderFragmentBufferIndexMonth) ]],
                                                             constant float &u_Year [[ buffer(IGPhotoBoothLightLeakCompositeShaderFragmentBufferIndexYear) ]],
                                                             constant float &u_DateOffsetX [[ buffer(IGPhotoBoothLightLeakCompositeShaderFragmentBufferIndexDateOffsetX) ]],
                                                             constant float &u_DateOffsetY [[ buffer(IGPhotoBoothLightLeakCompositeShaderFragmentBufferIndexDateOffsetY) ]])
{
    constexpr sampler textureSampler (mag_filter::linear, min_filter::linear);

    float4 srce = u_SourceTexture.sample(textureSampler, fragmentIn.texCoord);
    float4 blur = u_BlurTexture.sample(textureSampler, fragmentIn.texCoord);
    float mask = blur.a;

    // Blend blurred and sharp textures
    float4 color = mix(srce, blur, smoothstep(0.0, 0.2, mask));

    // Position text - assume fixed pixel height of so everything scales well
    float2 canvasSize = 1000.0 * u_RenderSize.yx / u_RenderSize.y;
    float2 scale = float2(2.75, 2.5);
    float2 textUv = float2(fragmentIn.texCoord.y, 1.0 - fragmentIn.texCoord.x) * scale;
    float2 tuv = textUv * canvasSize;
    float2 printPos = (float2(0.82, 0.9) + float2(u_DateOffsetY, -u_DateOffsetX)) * canvasSize * scale; // start print pos

    // Draw date
    float text = print_two_integer(int(u_Day), tuv, printPos, u_FontTexture, textureSampler);
    printPos.x += CHAR_SPACING.x;
    text += print_two_integer(int(u_Month), tuv, printPos, u_FontTexture, textureSampler);
    printPos.x += CHAR_SPACING.x;
    text += print_two_integer(int(u_Year), tuv, printPos, u_FontTexture, textureSampler);

    const float3 textColor = float3(0.94, 0.65, 0.55);
    color.rgb = mix(color.rgb + textColor * text, textColor, text * 0.5); // mix add and alpha blending
    color.a = 1.0;
    
    return color;
}

} // namespace IGPhotoBoothLightLeakCompositeShader
