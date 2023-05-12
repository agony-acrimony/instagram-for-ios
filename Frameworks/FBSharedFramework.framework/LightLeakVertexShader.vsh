precision highp float;

// attributes
attribute vec2 a_Position;
attribute vec2 a_TexCoords;
attribute vec2 a_LeakCoords;
attribute vec2 a_NoiseCoords;

// built-in uniforms
uniform float u_Time;

// script uniforms
uniform float u_LeakIndex;

// varyings
varying vec2 v_Uv;
varying vec2 v_PhotoUv;
varying vec2 v_LeakUv;
varying vec2 v_NoiseUv;
varying vec4 v_NoiseChannels;
varying float v_NoiseFlicker;

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
    float t = poster(u_Time, 8.0); // posterize time every 3 frames (1/8 second)
    float s = random(t); // randomize scale between 0-1
    return 1.0 / (1.0 + 0.008 * poster(s, 4.0)); // posterize scale to 5 intervals
}

vec4 rgbaCycleRand(float time, float steps)
{
    float t = poster(time, steps);
    float rnd = random(t) * 4.0;
    float a = step(3.0, rnd);
    float b = (1.0 - a) * step(2.0, rnd);
    float g = (1.0 - a) * (1.0 - b) * step(1.0, rnd);
    float r = (1.0 - a) * (1.0 - b) * (1.0 - g);
    return vec4(r, g, b, a);
}

void main()
{
    // Basic UV and position: 1-1 mapping with output
    v_Uv = a_Position * 0.5 + 0.5;
    gl_Position = vec4(a_Position, 0.0, 1.0);

    // Photo UV: apply random scaling
    float scale = randomScale();
    v_PhotoUv = (a_TexCoords - 0.5) * scale + 0.5; // scale from center

    // Leak UV: map index 0-3 to x,y offsets (leak texture contains 4 images)
    vec2 leakOff = vec2(mod(u_LeakIndex, 2.0), 1.0 - floor(u_LeakIndex / 2.0));
    v_LeakUv = a_LeakCoords * 0.5 + 0.5 * leakOff;

    // Noise UV
    v_NoiseUv = a_NoiseCoords;

    // Noise flicker and channels
    float tFlicker = poster(u_Time, 7.3);
    v_NoiseFlicker = 0.2 + 0.15 * random(tFlicker + 0.7281);
    v_NoiseChannels = rgbaCycleRand(u_Time + 0.31, 6.0);
}
