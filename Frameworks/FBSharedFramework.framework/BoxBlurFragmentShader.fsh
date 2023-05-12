precision highp float;

varying vec2 v_texCoord;

uniform sampler2D u_texture;
uniform vec2 u_textureSize;

vec4 boxFilter(sampler2D samp, vec2 uv, vec2 duv) {
    vec4 color;
    color  = texture2D(samp, uv + vec2(-duv.x, -duv.y));
    color += texture2D(samp, uv + vec2( duv.x, -duv.y));
    color += texture2D(samp, uv + vec2(-duv.x,  duv.y));
    color += texture2D(samp, uv + vec2( duv.x,  duv.y));
    return 0.25 * color;
}

void main()
{
    gl_FragColor = boxFilter(u_texture, v_texCoord, 1.0 / u_textureSize);
}

