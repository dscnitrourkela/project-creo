import { Canvas, useThree } from '@react-three/fiber'
import { EffectComposer } from '@react-three/postprocessing'
import { VhsGlitchEffect } from './vhs-glitch-effext'
import { useTexture } from '@react-three/drei'
import { Suspense } from 'react'

function Background({ url }: { url: string }) {
  const texture = useTexture(url) as any
  const { viewport } = useThree()

  const textureAspect = texture?.image.width / texture?.image.height
  const viewportAspect = viewport.width / viewport.height

  let scaleWidth, scaleHeight

  if (viewportAspect > textureAspect) {
    scaleWidth = viewport.width
    scaleHeight = viewport.width / textureAspect
  } else {
    scaleHeight = viewport.height
    scaleWidth = viewport.height * textureAspect
  }

  return (
    <mesh scale={[scaleWidth, scaleHeight, 1]}>
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  )
}

export function EffectScene({ image }: { image: string }) {
  return (
    <div className='absolute inset-0 z-0 w-full h-full pointer-events-none'>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: '#000000' }}
        gl={{ antialias: false }}
      >
        <Suspense fallback={<color attach='background' args={['#000000']} />}>
          <Background url={image} />
        </Suspense>

        <EffectComposer>
          <VhsGlitchEffect
            grain={0.6}
            glitchBlocks={0.5}
            rgbShift={0.1}
            scanlines={0.1}
            noise={0.1}
            distortion={0.3}
            speed={1.1}
            animated={true}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
