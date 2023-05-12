varying highp vec2 v_texCoord;

uniform highp mat4 u_colorConversionMatrix;
uniform sampler2D u_lumaTexture;
uniform sampler2D u_chromaTexture;

void main() {
    mediump vec3 yuv;
    yuv.x = texture2D(u_lumaTexture, v_texCoord).r;
    yuv.yz = texture2D(u_chromaTexture, v_texCoord).rg;

    lowp vec4 rgba;
    rgba = u_colorConversionMatrix * vec4(yuv, 1.0);

    gl_FragColor = rgba;
}
