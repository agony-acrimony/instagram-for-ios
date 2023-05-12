// attributes
attribute vec2 a_Position;
attribute vec2 a_TexCoords;

// script uniforms
uniform float u_OffsetX;
uniform float u_OffsetY;

// 0 means OrientationRight (back camera, without ARE effects before photobooth)
// 1 means OrientationLeftMirrored (front camera without ARE effects before photobooth)
// 2 means OrientationUp (ARE effects before photobooth, ARE output is always up)
uniform int u_InputOrientation;

// varyings
varying vec2 v_Uv;
varying vec2 v_PhotoUv;

uniform float u_Time1;
uniform vec2 u_RenderSize;

void main()
{
    gl_Position = vec4(a_Position, 0.0, 1.0);
    
    v_Uv = a_Position * 0.5 + 0.5;
    
    vec2 res = u_RenderSize / u_RenderSize.y;
    res = res.yx;
    vec2 wiggle = vec2(sin(u_Time1 * 7.79), sin(u_Time1 * 3.23)) * 0.003 * res;
    
    vec2 tex = a_TexCoords;
    if (u_InputOrientation == 2) {
        // ARE case where the orientation is up
        v_PhotoUv = ((tex - 0.5) * 0.98 + 0.5) + wiggle + vec2(u_OffsetX, -u_OffsetY);
        return;
    }
    
    // code below handles u_InputOrientation being 0 or 1
    // flip uv horizontally visually (vertically in code) if we are using front camera because
    // front camera is in X mirrored mode
    if (u_InputOrientation == 1) tex = vec2(a_TexCoords.x, 1. - a_TexCoords.y);
    v_PhotoUv = ((tex - 0.5) * 0.98 + 0.5) + wiggle + vec2(-u_OffsetY, -u_OffsetX);
    if (u_InputOrientation == 1) v_PhotoUv = vec2(v_PhotoUv.x, 1.0 - v_PhotoUv.y);
    
    
}
