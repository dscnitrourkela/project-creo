import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// import HeroSection from '../assets/img/heroseciton.png'
import { cat, bg } from '../config/about/index'
import type { JSX } from 'react'

const textContent =
  "THIS YEAR, CREO 26' IS THE FIRST EDITION OF NIT ROURKELA’S NATIONAL DESIGN CONFERENCE, CURATED TO EXPLORE HOW DESIGN DRIVES INNOVATION BEYOND AESTHETICS. THE CONFERENCE FOCUSES ON PRODUCT THINKING, HUMAN CENTERED DESIGN, SUSTAINABILITY, CREATIVE TECHNOLOGY, AND DESIGN LED ENTREPRENEURSHIP. THROUGH TALKS, WORKSHOPS, DESIGNATHON, AND EXHIBITIONS, CREO 26' CONNECTS STUDENTS."

const Word = ({
  children,
  range,
  progress,
  isPrimary,
}: {
  children: string
  range: [number, number]
  progress: any
  isPrimary?: boolean
}) => {
  const opacity = useTransform(progress, range, [0.3, 1])
  return (
    <span className='relative mx-[2px] md:mx-1 inline-block'>
      <span className='absolute opacity-10 select-none'>{children}</span>
      <motion.span style={{ opacity }} className={isPrimary ? 'text-primary' : 'text-white'}>
        {children}
      </motion.span>
    </span>
  )
}

export const About = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  // scrollYProgress spans from 0 (top of section at top of viewport)
  // to 1 (bottom of section at bottom of viewport).
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Manual sticky calculation:
  // We want to offset the scrolling to keep the content static.
  // The total scroll distance within the 175vh container while 100vh is visible is 75vh.
  // So as progress goes from 0 to 1, we translate the content by 75vh.
  const yContent = useTransform(scrollYProgress, [0, 1], ['0vh', '75vh'])

  const words = textContent.split(' ')

  return (
    <div ref={containerRef} className='relative h-[175vh] bg-black font-fort overflow-x-clip'>
      {/* 
        Background Section 
        - Absolute insert-0 makes it fill the 175vh container.
        - Moves at 1:1 speed with the page.
      */}
      <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
        <img
          alt='Background'
          className='w-full h-full object-cover opacity-100 transform-gpu'
          src={bg}
        />
        <div className='absolute inset-0 bg-linear-to-b from-black via-transparent to-black opacity-90' />
      </div>

      {/* 
        Content Layer - Uses Manual Sticky logic.
        - Because it's 'relative', it enters the screen naturally as you scroll.
        - The 'yContent' transform offsets the scroll 1:1, keeping it static in the viewport.
        - Once progress hits 1, the transform stops increasing, and it scrolls away.
      */}
      <motion.div
        style={{ y: yContent }}
        className='relative h-screen w-full flex justify-center items-center z-10'
      >
        <div className='flex flex-col max-w-6xl w-full px-4 md:px-12 justify-center text-center items-center'>
          <div className='flex gap-2 md:gap-4 mb-6 md:mb-10 opacity-60'>
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
          </div>

          <h1 className='text-[20px] sm:text-sm md:text-2xl lg:text-3xl font-black uppercase leading-[1.3] md:leading-[1.6] flex flex-wrap justify-center'>
            {words.map((word, i) => {
              // Word reveal completes at 95% for a clean focus hold.
              const revealEnd = 0.95
              const start = (i / words.length) * revealEnd
              const end = Math.min(start + (1.5 / words.length) * revealEnd, 1)
              const isPrimary = word.match(/NIT|ROURKELA|NATIONAL|DESIGN|CONFERENCE/i) && i <= 20

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isPrimary={!!isPrimary}
                >
                  {word}
                </Word>
              )
            })}
          </h1>
        </div>
      </motion.div>

      {/* Subtle cue that fades out instantly */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        className='fixed bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-[0.2em] z-20 pointer-events-none'
      >
        Scroll to reveal
      </motion.div>
    </div>
  )
}
