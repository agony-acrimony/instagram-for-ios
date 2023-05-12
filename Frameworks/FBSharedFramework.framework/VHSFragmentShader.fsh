#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 v_Uv;
varying vec2 v_PhotoUv;

uniform sampler2D u_LUT;
uniform sampler2D u_Texture;
uniform sampler2D u_GlitchTextureA;
uniform sampler2D u_GlitchTextureB;

uniform vec2 u_RenderSize;

uniform float u_Exposure;
uniform float u_Time2;
uniform float u_GlitchOpacity;
uniform float u_NoiseOpacity;
uniform float u_LutIndex;

#define colorlut_height  (32.0)
#define colorlut_width  (colorlut_height*colorlut_height)
#define colorlut_rows 4
#define colorlut_offset (1.0 / float(colorlut_rows))

#define EXPOSURE_MULT 0.25
#define NUM_GLITCH_FRAMES 10.0

vec4 colorLUT(vec4 color, sampler2D lut, float index)
{
    const vec4 uLutSize = vec4(colorlut_width, colorlut_height, 1.0/colorlut_width, 1.0/colorlut_height);
    
    vec3 scaledColor = color.xyz * (uLutSize.y - 1.0);
    float bFrac = fract(scaledColor.z);
    // offset by 0.5 pixel and fit within range [0.5, width-0.5]
    // to prevent bilinear filtering with adjacent colors
    vec2 texc = (0.5 + scaledColor.xy) * uLutSize.zw;
    // texc = (vec2(0.5, 0.0) + scaledColor.xy) * uLutSize.zw;

    // offset by the blue slice
    texc.x += (scaledColor.z - bFrac) * uLutSize.w;
    
    texc.y = 1.0 - texc.y;
    texc.y *= colorlut_offset;
    texc.y += colorlut_offset * floor(index);
    
    
    // sample the 2 adjacent blue slices
    vec3 b0 = texture2D(lut, texc).xyz;
    vec3 b1 = texture2D(lut, vec2(texc.x + uLutSize.w, texc.y)).xyz;
    
    // blend between the 2 adjacent blue slices
    color.xyz = mix(b0, b1, bFrac);
    
    return color;
}

vec3 colorLUT(vec3 color, sampler2D lut, float index)
{
  return colorLUT(vec4(color, 1.0), lut, index).rgb;
}

float random(in float x) {
  return fract(sin(x) * 43758.5453);
}

float random(in vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 random3(in vec3 pos)
{
  pos = vec3( dot(pos, vec3(127.1, 311.7, 74.7)),
              dot(pos, vec3(269.5, 183.3, 246.1)),
              dot(pos, vec3(113.5, 271.9, 124.6)));
  return -1. + 2. * fract(sin(pos) * 43758.5453123);
}

vec3 exposure(vec3 color, float amount)
{
  return color * pow(2.0, amount);
}

float poster(float val, float steps)
{
  return floor(val * steps) / steps;
}

vec2 getGridUv(vec2 uv, int index)
{
  const float cols = 2.0;
  const float rows = 3.0;
  const vec2 grid = 1.0 / vec2(cols, rows);

  if (index > 5) index -= 6;
  float frame = float(index);
  vec2 offset = vec2(mod(frame, cols), floor(frame / cols));
  return vec2(uv.x, uv.y) * grid + grid * offset;
}

vec4 sampleGlitch(vec2 uv, int index)
{
  float frame = float(index);
  uv = getGridUv(uv, index);
  return (index < 6) ? texture2D(u_GlitchTextureA, uv) : texture2D(u_GlitchTextureB, uv);
}

void main()
{
  // Background color
  vec4 color = vec4(vec3(0.05), 1.0);
  
  // Sample photo
  vec4 photo = texture2D(u_Texture, v_PhotoUv);
  vec2 isPhoto = step(abs(v_PhotoUv - 0.5), vec2(0.5));
  color = mix(color, texture2D(u_Texture, v_PhotoUv), min(isPhoto.x, isPhoto.y));

  // Apply LUT
    
  color = mix(color, colorLUT(color, u_LUT, u_LutIndex), 1.0);
   
    
  // Apply Exposure
  color.rgb = exposure(color.rgb, u_Exposure * EXPOSURE_MULT);

    
  // Apply noise
  vec2 posterUv = floor(mix(0.75, 0.25, u_NoiseOpacity) * v_Uv * u_RenderSize) / u_RenderSize;
  vec3 rgbNoise = random3(vec3(posterUv, u_Time2));
  color.rgb += rgbNoise * u_NoiseOpacity * 0.15;
  color.rgb = clamp(color.rgb, vec3(0.0), vec3(1.0));
    

  // Blend glitch textures
  const float glitchSpeed = 10.0;
  vec2 res = vec2(1.0, 2.8);
  float t = fract(u_Time2 / 4.5334); // [0,1]
  float y = (random(poster(t - 0.2, 4.0)) - 0.5) * 0.15;

  // Bottom glitch
  float frameBot = mod(floor(u_Time2 * glitchSpeed), NUM_GLITCH_FRAMES);
  vec2 uvBot = clamp((1.0 - v_Uv) * res - vec2(0.0, y), vec2(0.0, 0.01), vec2(1.0, 0.9));
  vec4 glitch = sampleGlitch(uvBot, int(frameBot));

  // Top glitch
  if (v_Uv.y < 0.5) {
    float frameTop = mod(frameBot + 7.0, NUM_GLITCH_FRAMES);
    float y = (random(poster(t - 0.2, 4.0) + 1.83)) * 0.5;
    vec2 uvTop = clamp(v_Uv * res + vec2(0.0, y), vec2(0.0, 0.01), vec2(1.0, 0.9));
    glitch = sampleGlitch(uvTop, int(frameTop));
  }

  color.rgb = mix(color.rgb, glitch.rgb, glitch.a * u_GlitchOpacity);

  gl_FragColor = color;

}
