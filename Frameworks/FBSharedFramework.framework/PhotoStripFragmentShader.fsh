#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 v_Uv;
varying vec2 v_PhotoUv;
varying vec2 v_FrameUv;

uniform sampler2D u_LUT;
uniform sampler2D u_TextureA;
uniform sampler2D u_TextureB;

// 0 means OrientationRight (back camera, without ARE effects before photobooth)
// 1 means OrientationLeftMirrored (front camera without ARE effects before photobooth)
// 2 means OrientationUp (ARE effects before photobooth, ARE output is always up)
uniform int u_InputOrientationFragment;

#define colorlut_height  (32.0)
#define colorlut_width  (colorlut_height*colorlut_height)

vec4 colorLUT(vec4 color, sampler2D lut)
{
    const vec4 uLutSize = vec4(colorlut_width, colorlut_height, 1.0/colorlut_width, 1.0/colorlut_height);
    
    vec3 scaledColor = color.xyz * (uLutSize.y - 1.0);
    float bFrac = fract(scaledColor.z);
    vec2 texc = (0.5 + scaledColor.xy) * uLutSize.zw;
    texc.x += (scaledColor.z - bFrac) * uLutSize.w;
    texc.y = 1.0 - texc.y;

    vec3 b0 = texture2D(lut, texc).xyz;
    vec3 b1 = texture2D(lut, vec2(texc.x + uLutSize.w, texc.y)).xyz;
    color.xyz = mix(b0, b1, bFrac);
    
    return color;
}

vec3 colorLUT(vec3 color, sampler2D lut)
{
  return colorLUT(vec4(color, 1.0), lut).rgb;
}

float rectangleCtr(in vec2 uv, in vec2 size)
{
  vec2 r = uv - 0.5 * size;
  return smoothstep(0.005, 0.0, max(r.x, r.y));
}

float edgeRectCtr(in vec2 uv, in vec2 innerSize, in vec2 outerSize)
{
    return rectangleCtr(uv, outerSize) - rectangleCtr(uv, innerSize);
}

void main()
{
  const float photoHeight = 0.945;
  vec2 photoUv = v_PhotoUv;
  bool isUp = false;
  if (u_InputOrientationFragment == 2) isUp = true;
  if (isUp) {
    photoUv.y = fract(photoUv.y / photoHeight);
    photoUv.y = (photoUv.y - 0.5) * photoHeight + 0.5;
  } else {
    photoUv.x = fract(photoUv.x / photoHeight);
    photoUv.x = (photoUv.x - 0.5) * photoHeight + 0.5;
  }
    
  vec4 a = texture2D(u_TextureA, photoUv);
  vec4 b = texture2D(u_TextureB, photoUv);
  float aOrB = step(mod((isUp ? v_PhotoUv.y : v_PhotoUv.x) / photoHeight, 2.0), 1.0);
  vec4 color = mix(b, a, vec4(aOrB));
    
  // Apply LUT
  color = mix(color, colorLUT(color, u_LUT), 0.8);

  photoUv = v_FrameUv;
  if (isUp) {
    photoUv.y = fract(photoUv.y / photoHeight);
    photoUv.y = (photoUv.y - 0.5) * photoHeight + 0.5;
  } else {
    photoUv.x = fract(photoUv.x / photoHeight);
    photoUv.x = (photoUv.x - 0.5) * photoHeight + 0.5;
  }
    
  // Blend white borders and gray background
  const vec3 background = vec3(0.3);
  vec2 borders = vec2(0.06, 0.08);
  float rect;
  vec2 centerUv = abs(photoUv - 0.5);
  float xStep, yStep;
  if (isUp) {
    borders = borders.yx;
    borders *= 1.5;
    xStep = step(centerUv.x, 0.5 + 0.25 * borders.x);
    yStep = step(abs(v_FrameUv.y / photoHeight - 2.0), 2.0);
    color.rgb = mix(background, color.rgb, xStep * yStep);
    rect = edgeRectCtr(centerUv, vec2(1.0, photoHeight - borders.y), vec2(1.0 + borders.x, photoHeight));
  } else {
    xStep = step(abs(v_FrameUv.x / photoHeight - 2.0), 2.0);
    yStep = step(centerUv.y, 0.5 + 0.25 * borders.x);
    color.rgb = mix(background, color.rgb, xStep * yStep);
    rect = edgeRectCtr(centerUv, vec2(photoHeight - borders.x, 1.0), vec2(photoHeight, 1.0 + borders.y));
  }

  color.rgb = mix(color.rgb, vec3(1.0), rect * xStep);
  color = clamp(color, 0.0, 1.0);

  // Add vignette
  const vec2 vigRatio = vec2(1.0, 1.4);
  float vignette = smoothstep(1.1, 0.35, distance(v_Uv * vigRatio, vec2(0.5) * vigRatio));
  color.rgb *= vignette;

  gl_FragColor = color;
}
