import { forwardRef, useMemo } from 'react'
import { Effect } from 'postprocessing'
import { Uniform } from 'three'

/**
 * VHS Glitch Effect
 * Combines multiple glitch techniques:
 * - RGB shift / chromatic aberration
 * - Scanlines
 * - Noise displacement
 * - Vertical bar distortion (VHS style)
 */

const fragmentShader = `
  uniform float uTime;
  uniform float uGrain;
  uniform float uGlitchBlocks;
  uniform float uRgbShift;
  uniform float uScanlines;
  uniform float uNoise;
  uniform float uDistortion;
  uniform float uSpeed;
  uniform bool uAnimated;

  // Pseudo-random function
  float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  // Noise function
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Vertical bar for VHS distortion
  float verticalBar(float pos, float uvY, float offset) {
    float edge0 = pos - 0.02;
    float edge1 = pos + 0.02;
    float x = smoothstep(edge0, pos, uvY) * offset;
    x -= smoothstep(pos, edge1, uvY) * offset;
    return x;
  }

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    float t = uAnimated ? uTime * uSpeed : 0.0;
    vec2 texCoord = uv;

    // === VHS-STYLE VERTICAL BAR DISTORTION ===
    if (uDistortion > 0.0) {
      for (float i = 0.0; i < 0.71; i += 0.1313) {
        float d = mod(t * i, 1.7);
        float o = sin(1.0 - tan(t * 0.24 * i));
        o *= uDistortion * 0.05;
        texCoord.x += verticalBar(d, texCoord.y, o);
      }
    }

    // === NOISE DISPLACEMENT ===
    if (uNoise > 0.0) {
      float noiseY = texCoord.y * 250.0;
      noiseY = float(int(noiseY)) * (1.0 / 250.0);
      float noiseVal = rand(vec2(t * 0.00001, noiseY));
      texCoord.x += noiseVal * uNoise * 0.01;
    }

    // === RGB SHIFT / CHROMATIC ABERRATION ===
    vec2 direction = texCoord - 0.5;
    float dist = length(direction) * 0.7;
    vec2 offset = dist * normalize(direction) * uRgbShift * 0.02;

    vec2 offsetR = offset + vec2(sin(t) * 0.003, 0.0) * uRgbShift;
    vec2 offsetB = -offset + vec2(cos(t * 0.97) * 0.003, 0.0) * uRgbShift;

    float r = texture2D(inputBuffer, texCoord + offsetR).r;
    float g = texture2D(inputBuffer, texCoord).g;
    float b = texture2D(inputBuffer, texCoord + offsetB).b;

    vec3 color = vec3(r, g, b);

    // === SCANLINES ===
    if (uScanlines > 0.0) {
      float scanline = sin(uv.y * 800.0 + t * 10.0) * 0.5 + 0.5;
      scanline = pow(scanline, 1.5);
      color *= 1.0 - (scanline * uScanlines * 0.15);

      float hLine = sin(uv.y * 300.0) * 0.5 + 0.5;
      hLine = step(0.98, hLine);
      color *= 1.0 - (hLine * uScanlines * 0.1);
    }

    // === RANDOM GLITCH BLOCKS ===
    if (uGlitchBlocks > 0.0 && uAnimated) {
      float blockThreshold = 1.0 - (uGlitchBlocks * 0.15);
      float blockNoise = rand(vec2(floor(uv.y * 20.0), floor(t * 10.0)));
      if (blockNoise > blockThreshold) {
        float blockOffset = (rand(vec2(floor(t * 30.0), floor(uv.y * 20.0))) - 0.5) * 0.1 * uGlitchBlocks;
        vec2 blockUV = vec2(uv.x + blockOffset, uv.y);
        color = texture2D(inputBuffer, blockUV).rgb;
      }
    }

    // === FILM GRAIN ===
    if (uGrain > 0.0) {
      float grain = rand(uv + t) * 0.05 * uGrain;
      color += grain - (0.025 * uGrain);
    }

    outputColor = vec4(color, 1.0);
  }
`

interface VhsGlitchEffectProps {
  grain?: number
  glitchBlocks?: number
  rgbShift?: number
  scanlines?: number
  noise?: number
  distortion?: number
  speed?: number
  animated?: boolean
}

class VhsGlitchEffectImpl extends Effect {
  constructor(options: VhsGlitchEffectProps = {}) {
    const {
      grain = 0.4,
      glitchBlocks = 0.5,
      rgbShift = 0.85,
      scanlines = 0.85,
      noise = 0.3,
      distortion = 0.85,
      speed = 1,
      animated = true,
    } = options

    super('VhsGlitchEffect', fragmentShader, {
      uniforms: new Map<string, Uniform<number | boolean>>([
        ['uTime', new Uniform(0)],
        ['uGrain', new Uniform(grain)],
        ['uGlitchBlocks', new Uniform(glitchBlocks)],
        ['uRgbShift', new Uniform(rgbShift)],
        ['uScanlines', new Uniform(scanlines)],
        ['uNoise', new Uniform(noise)],
        ['uDistortion', new Uniform(distortion)],
        ['uSpeed', new Uniform(speed)],
        ['uAnimated', new Uniform(animated)],
      ]),
    })
  }

  update(_renderer: unknown, _inputBuffer: unknown, deltaTime: number) {
    if (deltaTime) {
      this.uniforms.get('uTime')!.value += deltaTime
    }
  }
}

export const VhsGlitchEffect = forwardRef<unknown, VhsGlitchEffectProps>((props, ref) => {
  const {
    grain = 0.4,
    glitchBlocks = 0.5,
    rgbShift = 0.85,
    scanlines = 0.85,
    noise = 0.3,
    distortion = 0.85,
    speed = 1,
    animated = true,
  } = props

  const effect = useMemo(
    () =>
      new VhsGlitchEffectImpl({
        grain,
        glitchBlocks,
        rgbShift,
        scanlines,
        noise,
        distortion,
        speed,
        animated,
      }),
    [grain, glitchBlocks, rgbShift, scanlines, noise, distortion, speed, animated],
  )

  // Update uniforms when props change
  useMemo(() => {
    effect.uniforms.get('uGrain')!.value = grain
    effect.uniforms.get('uGlitchBlocks')!.value = glitchBlocks
    effect.uniforms.get('uRgbShift')!.value = rgbShift
    effect.uniforms.get('uScanlines')!.value = scanlines
    effect.uniforms.get('uNoise')!.value = noise
    effect.uniforms.get('uDistortion')!.value = distortion
    effect.uniforms.get('uSpeed')!.value = speed
    effect.uniforms.get('uAnimated')!.value = animated
  }, [effect, grain, glitchBlocks, rgbShift, scanlines, noise, distortion, speed, animated])

  return <primitive ref={ref} object={effect} dispose={null} />
})

VhsGlitchEffect.displayName = 'VhsGlitchEffect'
