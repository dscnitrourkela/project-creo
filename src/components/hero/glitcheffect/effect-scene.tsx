import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer } from '@react-three/postprocessing'
import { VhsGlitchEffect } from './vhs-glitch-effext'
import { useTexture } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import type { RefObject } from 'react'

const mouseState = { x: 0, y: 0, targetX: 0, targetY: 0 }

function Background({ url }: { url: string }) {
  const meshRef = useRef<any>(null)
  const texture = useTexture(url) as any
  const { viewport } = useThree()

  useFrame(() => {
    mouseState.x += (mouseState.targetX - mouseState.x) * 0.1
    mouseState.y += (mouseState.targetY - mouseState.y) * 0.1

    if (meshRef.current) {
      meshRef.current.rotation.x = mouseState.y * 0.05
      meshRef.current.rotation.y = mouseState.x * 0.05
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

interface EffectSceneProps {
  image: string
  heroRef?: RefObject<HTMLDivElement | null>
}

export function EffectScene({ image, heroRef }: EffectSceneProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile || !heroRef?.current) return

    const heroElement = heroRef.current

    const handleMouseMove = (event: MouseEvent) => {
      mouseState.targetX = (event.clientX / window.innerWidth) * 2 - 1
      mouseState.targetY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const handleMouseLeave = () => {
      mouseState.targetX = 0
      mouseState.targetY = 0
    }

    heroElement.addEventListener('mousemove', handleMouseMove)
    heroElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove)
      heroElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [heroRef, isMobile])

  if (isMobile) {
    return (
      <div className='absolute inset-0 z-0 w-full h-full pointer-events-none bg-black'>
        <img src={image} alt='' className='w-full h-full object-cover' />
        <div className='absolute inset-0 z-10 w-full h-full bg-black opacity-20 pointer-events-none' />
      </div>
    )
  }

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
