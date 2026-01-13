import { useEffect, useRef } from 'react'
import imgs from '@/config/hero'
import Countdown from './Countdown'
import { EffectScene } from './glitcheffect/effect-scene'
import HeroHeader from './HeroHeader'
import HeroTitle from './HeroTitle'
import HeroInfo from './HeroInfo'
import FloatingElement from './FloatingElement'

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const topCornerLeftRef = useRef<HTMLDivElement>(null)
  const topCornerRightRef = useRef<HTMLDivElement>(null)
  const bottomCornerRightRef = useRef<HTMLDivElement>(null)
  const bottomCornerLeftRef = useRef<HTMLDivElement>(null)
  const butterflyLeftRef = useRef<HTMLDivElement>(null)
  const butterflyRightRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return

    const heroElement = heroRef.current
    if (!heroElement) return

    let requestRef: number
    let targetX = 0
    let targetY = 0

    const posContent = { x: 0, y: 0 }
    const posCorners = { x: 0, y: 0 }
    const posButterflies = { x: 0, y: 0 }

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) / window.innerWidth
      targetY = (e.clientY - window.innerHeight / 2) / window.innerHeight
    }

    const handleMouseLeave = () => {
      targetX = 0
      targetY = 0
    }

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      // Different lerp factors create usage of different "lag"
      // Lower factor = more lag (floaty/heavy), Higher factor = tighter tracking

      // Content: Tightest tracking (least lag)
      posContent.x = lerp(posContent.x, targetX, 0.08)
      posContent.y = lerp(posContent.y, targetY, 0.08)

      // Corners: Medium lag
      posCorners.x = lerp(posCorners.x, targetX, 0.05)
      posCorners.y = lerp(posCorners.y, targetY, 0.05)

      // Butterflies: Most lag (very floaty)
      posButterflies.x = lerp(posButterflies.x, targetX, 0.02)
      posButterflies.y = lerp(posButterflies.y, targetY, 0.02)

      const applyOne = (
        ref: React.RefObject<HTMLDivElement | null>,
        x: number,
        y: number,
        factor: number,
      ) => {
        if (ref.current) {
          ref.current.style.transform = `translate(${x * factor}px, ${y * factor}px)`
        }
      }

      applyOne(contentRef, posContent.x, posContent.y, 15)

      applyOne(topCornerLeftRef, posCorners.x, posCorners.y, 40)
      applyOne(topCornerRightRef, posCorners.x, posCorners.y, 40)
      applyOne(bottomCornerRightRef, posCorners.x, posCorners.y, 100)
      applyOne(bottomCornerLeftRef, posCorners.x, posCorners.y, 100)

      applyOne(butterflyLeftRef, posButterflies.x, posButterflies.y, 200)
      applyOne(butterflyRightRef, posButterflies.x, posButterflies.y, 200)

      requestRef = requestAnimationFrame(animate)
    }

    heroElement.addEventListener('mousemove', handleMouseMove)
    heroElement.addEventListener('mouseleave', handleMouseLeave)
    requestRef = requestAnimationFrame(animate)

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove)
      heroElement.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(requestRef)
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className='relative w-full min-h-screen overflow-hidden bg-black text-white font-sans'
      id='home'
    >
      <EffectScene image={imgs.homebackgorundandLayer} heroRef={heroRef} />

      <div className='absolute inset-0 z-10 opacity-20'>
        <img
          src={imgs.background}
          alt='Background Texture'
          className='w-full h-full object-fill opacity-100 mix-blend-color-dodge blur-xs grayscale pointer-events-none'
        />
      </div>

      <FloatingElement
        ref={topCornerLeftRef}
        src={imgs.topcorner}
        alt=''
        className='-top-45 -left-30 w-48 sm:w-[200px] md:w-[400px] opacity-17'
      />
      <FloatingElement
        ref={topCornerRightRef}
        src={imgs.topcorner}
        alt=''
        className='-top-45 -right-40 w-48 sm:w-[200px] md:w-[400px] opacity-17'
      />

      <FloatingElement
        ref={bottomCornerRightRef}
        src={imgs.bottomcorner}
        alt='Hand'
        className='-bottom-54 -right-38 w-50 sm:w-[200px] md:w-[500px]'
      />

      <div
        ref={bottomCornerLeftRef}
        className='absolute -bottom-50 -left-38 z-20 pointer-events-none w-50 sm:w-[200px] md:w-[500px] transition-transform duration-100 ease-out'
      >
        <img src={imgs.bottomcorner} alt='Hand' className='w-full object-cover scale-x-[-1]' />
      </div>

      <FloatingElement
        ref={butterflyLeftRef}
        src={imgs.leftsideflying}
        alt='Butterfly Left'
        className='top-5 left-60 -rotate-45 hidden md:block w-32 md:w-42 opacity-80 animate-pulse delay-700'
      />
      <FloatingElement
        ref={butterflyRightRef}
        src={imgs.rightsideflying}
        alt='Butterfly Right'
        className='top-5 right-60 rotate-45 hidden md:block w-32 md:w-42 opacity-80 animate-pulse delay-1000'
      />

      <div
        ref={contentRef}
        className='relative z-30 flex flex-col items-center justify-between w-full min-h-screen px-4 overflow-y-auto md:overflow-hidden transition-transform duration-100 ease-out pointer-events-none lmd:pt-0 pt-20'
      >
        <HeroHeader />
        <HeroTitle />
        <HeroInfo />

        <Countdown />
        <div className='w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mt-auto pt-10 gap-4 shrink-0'></div>
      </div>
    </div>
  )
}

export default Hero
