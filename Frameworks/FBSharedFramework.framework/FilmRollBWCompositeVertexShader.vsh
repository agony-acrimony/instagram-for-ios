// attributes
attribute highp vec2 a_position;
attribute highp vec2 a_texCoord;

// uniforms
uniform highp mat4 u_MVPMatrix;

// varyings
varying vec2 v_UvR;
varying vec2 v_UvG;
varying vec2 v_UvB;

void main()
{
    gl_Position = u_MVPMatrix * vec4(a_position, 0.0, 1.0);
    
    const float uvScale = 0.985;
    vec2 v_texCoord = (a_texCoord - 0.5) * uvScale + 0.5;;

    v_UvR = (v_texCoord - 0.5) / 1.01 + 0.5;
    v_UvG = (v_texCoord - 0.5) / 1.005 + 0.5 - vec2(0.0037, 0.0);
    v_UvB =  v_texCoord - vec2(0.0036, 0.0);
    
}
