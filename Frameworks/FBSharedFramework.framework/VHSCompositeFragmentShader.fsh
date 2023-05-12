#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 v_texCoord;
varying vec2 v_UvR;
varying vec2 v_UvG;
varying vec2 v_UvB;

uniform sampler2D u_Texture;

void main()
{
  vec4 color = vec4(
    texture2D(u_Texture, v_UvR).r,
    texture2D(u_Texture, v_UvG).g,
    texture2D(u_Texture, v_UvB).b,
    1.0);
  gl_FragColor = color;
}
