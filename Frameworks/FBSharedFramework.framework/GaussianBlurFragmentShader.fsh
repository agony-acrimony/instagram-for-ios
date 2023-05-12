precision highp float;

varying vec2 v_texCoord;

uniform sampler2D u_texture;
uniform vec2 u_renderSize;
uniform float u_blurDirectionX;
uniform float u_blurDirectionY;
uniform float u_blurAmount;
uniform float u_vignetteAmount;

// Separable gaussian blur
// ------------------------------------------------------------
float sCurve(float x)
{
    x = x * 2.0 - 1.0;
    return -x * abs(x) * 0.5 + x + 0.5;
}

vec4 blurDir(sampler2D source, vec2 duv, vec2 uv, float fradius)
{
    int radius = int(fradius);
    if (fradius >= 1.0)
    {
        vec4 A = vec4(0.0);
        vec4 C = vec4(0.0);
        float divisor = 0.0;
        float weight = 0.0;
        float radiusMultiplier = 1.0 / fradius;
        for (int xi = -radius; xi <= radius; xi+=2) {
            float x = float(xi);
            A = texture2D(source, uv + x * duv);
            weight = sCurve(1.0 - (abs(x) * radiusMultiplier));
            C.rgb += A.rgb * weight;
            divisor += weight;
        }
        return vec4(C.rgb / divisor, 1.0);
    }
    return texture2D(source, uv);
}

// Main
// ------------------------------------------------------------
float getBlurMask()
{
    const vec2 vignetteRatio = vec2(1.0, 1.0);
    vec2 res = vignetteRatio * u_renderSize / u_renderSize.y;
    float d = distance(v_texCoord * res, vec2(0.5) * res);
    return smoothstep(0.25, 0.5, d * 1.5);
}

void main()
{
    vec2 dir = vec2(u_blurDirectionX, u_blurDirectionY);

    float mask = mix(1.0, getBlurMask(), u_vignetteAmount);
    vec4 color = blurDir(u_texture, dir / u_renderSize, v_texCoord, mask * u_blurAmount);

    gl_FragColor.rgb = color.rgb;
    gl_FragColor.a = mask; // write mask on alpha channel for next pass
}
