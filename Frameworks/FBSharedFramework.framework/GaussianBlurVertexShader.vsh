// attributes
attribute highp vec2 a_position;
attribute highp vec2 a_texCoord;

// varyings
varying highp vec2 v_texCoord;

void main()
{
    v_texCoord = a_texCoord;
    gl_Position = vec4(a_position, 0.0, 1.0);
}