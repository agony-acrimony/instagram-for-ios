#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 v_texCoord;

uniform sampler2D u_SourceTexture;
uniform sampler2D u_BlurTexture;

void main()
{
  vec2 uv = v_texCoord;
  vec4 srce = texture2D(u_SourceTexture, uv);
  vec4 blur = texture2D(u_BlurTexture, uv);
  float mask = blur.a;

  // Need to blend blurred and sharp textures
  // can't use blurred one in non-blurred areas, since it's 25% size
  vec4 color = mix(srce, blur, mask);
  gl_FragColor = color;
  gl_FragColor.a = 1.0;
}
