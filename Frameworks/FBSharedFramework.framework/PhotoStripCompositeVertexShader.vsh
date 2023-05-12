// attributes
attribute highp vec2 a_position;
attribute highp vec2 a_texCoord;

// uniforms
uniform highp mat4 u_MVPMatrix;

// varyings
varying highp vec2 v_texCoord;

void main()
{
    v_texCoord = a_texCoord;
    gl_Position = u_MVPMatrix * vec4(a_position, 0.0, 1.0);
}
