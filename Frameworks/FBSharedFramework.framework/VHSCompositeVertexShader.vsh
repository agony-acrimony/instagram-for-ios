// attributes
attribute highp vec2 a_position;
attribute highp vec2 a_texCoord;

// uniforms
uniform highp mat4 u_MVPMatrix;

// varyings
varying highp vec2 v_texCoord;
varying vec2 v_UvR;
varying vec2 v_UvG;
varying vec2 v_UvB;

uniform float u_OffsetR;
uniform float u_OffsetB;
uniform float u_ScaleG;
uniform float u_ScaleB;

void main()
{
    gl_Position = u_MVPMatrix * vec4(a_position, 0.0, 1.0);
    
    const float uvScale = 0.985;
    v_texCoord = (a_texCoord - 0.5) * uvScale + 0.5;
      v_UvR = v_texCoord - vec2(u_OffsetR, 0.0);
    v_UvG = (v_texCoord - 0.5) / u_ScaleG + 0.5;
      v_UvB = (v_texCoord - 0.5) / u_ScaleB + 0.5 - vec2(u_OffsetB, 0.0);
}
