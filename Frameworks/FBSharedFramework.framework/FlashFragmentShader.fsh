#define EXPOSURE_MULT 0.25

varying highp vec2 v_texCoord;

uniform sampler2D u_texture;
uniform highp float u_exposure;

lowp vec3 exposure(lowp vec3 color, highp float amount)
{
    return color * pow(2.0, amount);
}

void main()
{
    lowp vec4 color = texture2D(u_texture, v_texCoord);
    color.rgb = exposure(color.rgb, u_exposure * EXPOSURE_MULT);
    gl_FragColor = color;
}
