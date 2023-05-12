// attributes
attribute vec2 a_Position;
attribute vec2 a_TexCoords;

// script uniforms
uniform float u_OffsetX;
uniform float u_OffsetY;
uniform float u_Angle;
uniform vec2 u_RenderSize;

// 0 means OrientationRight (back camera, without ARE effects before photobooth)
// 1 means OrientationLeftMirrored (front camera without ARE effects before photobooth)
// 2 means OrientationUp (ARE effects before photobooth, ARE output is always up)
uniform int u_InputOrientation;

// varyings
varying vec2 v_Uv;
varying vec2 v_PhotoUv;
varying vec2 v_FrameUv;

mat2 rotate2d(in float radians)
{
  float c = cos(radians);
  float s = sin(radians);
  return mat2(c, -s, s, c);
}

vec2 adjustUv(vec2 uv, vec2 translation, float rotation, float scale, vec2 mid, vec2 size)
{
  vec2 res;
  if (u_InputOrientation == 2) {
    res  = size / size.y;
  } else {
    res  = size / size.x;
    res = res.yx;
  }

  mat2 rot = rotate2d(rotation);

  uv = (uv - 0.5) * scale + 0.5;
  uv += translation;
  uv -= mid;
  uv *= res;

  uv = rot * uv;
  uv /= res;
  uv += mid;
  return uv;
}

void main()
{
  gl_Position = vec4(a_Position, 0.0, 1.0);
    
  v_Uv = a_Position * 0.5 + 0.5;
    
  const vec2 center = vec2(0.52, 0.54);
  const float scale = 0.97;
  vec2 tex = a_TexCoords;
    
  if (u_InputOrientation == 2) {
      // Orientation Up
      v_PhotoUv = adjustUv(tex, vec2(u_OffsetX, u_OffsetY), u_Angle, scale, center, u_RenderSize);
      v_FrameUv = v_PhotoUv;
      return;
  }
    
  vec2 offset = vec2(u_OffsetY, -u_OffsetX);
  // flip uv horizontally visually (vertically in code) if we are using front camera because
  // front camera is in X mirrored mode
  if (u_InputOrientation == 1) tex = vec2(a_TexCoords.x, 1. - a_TexCoords.y);
  v_PhotoUv = adjustUv(tex, offset, u_Angle, scale, center, u_RenderSize);
  v_FrameUv = v_PhotoUv;
  if (u_InputOrientation == 1) v_PhotoUv = vec2(v_PhotoUv.x, 1.0 - v_PhotoUv.y);
}
