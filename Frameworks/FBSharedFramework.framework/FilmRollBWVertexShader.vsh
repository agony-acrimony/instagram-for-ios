// attributes
attribute vec2 a_Position;
attribute vec2 a_TexCoords;
attribute vec2 a_FrameCoords;

// script uniforms
uniform float u_OffsetY;
uniform float u_Time1;
// 1 for Up
// 0 for LeftMirrored or Right
uniform int u_InputOrientation;

// varyings
varying vec2 v_Uv;
varying vec2 v_PhotoUv;
varying vec2 v_FrameUv;
varying vec2 v_LeakUv;

vec2 adjustUv(vec2 uv, vec2 translation, float scale)
{
  uv = (uv - 0.5) * scale + 0.5; // scale from center
  uv += translation;
  return uv;
}

float random(in float x)
{
  return fract(sin(x) * 43758.5453);
}

float poster(float val, float steps)
{
  return floor(val * steps) / steps;
}

float randomScale()
{
  float t = poster(u_Time1,  3.0); // posterize time every 10 frames (1/3 second)
  float s = random(t); // randomize scale between 0-1
  return 0.98 + 0.04 * poster(s, 4.0); // posterize scale to 0.98, 0.99, 1.0, 1.01, 1.02
}

void main()
{
  gl_Position = vec4(a_Position, 0.0, 1.0);
    
  v_Uv = a_FrameCoords;
  v_LeakUv = v_Uv;
  float rnd = random(poster(u_Time1, 3.0));
  v_LeakUv.y = rnd > 0.5 ? v_LeakUv.y : 1.0 - v_LeakUv.y;
    
  // frame image is gl convention in terms of orientation
  // so apply the roll vertically
  vec2 offset = vec2(0.0, -poster(u_OffsetY, 3.0));
  float scale = randomScale();
  // used for frame
  v_FrameUv = adjustUv(a_FrameCoords, vec2(offset.x, -offset.y), scale);

  // source image on iOS is always landscape
  // so apply the roll horizontally in uv space (which becomes vertical visually)
  vec2 sourceOffset = u_InputOrientation == 0 ? offset.yx : offset;
  v_PhotoUv = adjustUv(a_TexCoords, sourceOffset, scale);
}
