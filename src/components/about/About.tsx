import { memo, useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import type { JSX } from 'react'
import { AboutBackground } from '@/components/about/AboutBackground'
import { AboutContent } from '@/components/about/AboutContent'
import { textContent } from '@/config/about'

export const About = memo((): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const yContent = useTransform(scrollYProgress, [0, 1], ['0vh', '75vh'])

  return (
    <div
      ref={containerRef}
      className='relative h-screen md:h-[175vh] bg-black font-fort overflow-x-clip'
    >
      <AboutBackground y={yContent} />

      <AboutContent
        yContent={yContent}
        scrollYProgress={scrollYProgress}
        textContent={textContent}
      />
    </div>
  )
})
