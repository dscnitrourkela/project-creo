import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer } from '@react-three/postprocessing'
import { VhsGlitchEffect } from './vhs-glitch-effext'
import { useTexture } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'

function Background({ url }: { url: string }) {
  const meshRef = useRef<any>(null)
  const texture = useTexture(url) as any
  const { viewport } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += (mouse.current.y * 0.05 - meshRef.current.rotation.x) * 0.1
      meshRef.current.rotation.y += (mouse.current.x * 0.05 - meshRef.current.rotation.y) * 0.1
    }
  })

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
    <mesh ref={meshRef} scale={[scaleWidth * 1.1, scaleHeight * 1.1, 1]}>
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
      <div className='absolute inset-0 z-10 w-full h-full bg-black opacity-20 pointer-events-none' />
    </div>
  )
}
