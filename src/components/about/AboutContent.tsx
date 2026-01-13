import { memo, useMemo } from 'react'
import { motion, MotionValue } from 'framer-motion'
import { Word } from './Word'
import { cat } from '@/config/about'
import { useIsMobile } from '@/lib/useIsMobile'

interface AboutContentProps {
  yContent: MotionValue<string>
  scrollYProgress: MotionValue<number>
  textContent: string
}

interface WordData {
  word: string
  range: [number, number]
  isPrimary: boolean
}

export const AboutContent = memo(
  ({ yContent, scrollYProgress, textContent }: AboutContentProps) => {
    const isMobile = useIsMobile()

    // Memoize words and their ranges to prevent recalculation on every render
    const wordsData = useMemo<WordData[]>(() => {
      const words = textContent.split(' ')
      const revealEnd = 0.95

      return words.map((word, i) => {
        const start = (i / words.length) * revealEnd
        const end = Math.min(start + (1.5 / words.length) * revealEnd, 1)
        const isPrimary = !!(word.match(/NIT|ROURKELA|NATIONAL|DESIGN|CONFERENCE/i) && i <= 20)

        return {
          word,
          range: [start, end] as [number, number],
          isPrimary,
        }
      })
    }, [textContent])

    // On mobile, use a simpler static layout
    const containerStyle = isMobile ? {} : { y: yContent }

    return (
      <motion.div
        style={containerStyle}
        className='relative h-screen w-full flex justify-center items-center z-10'
      >
        <div className='flex flex-col max-w-6xl w-full px-4 md:px-12 justify-center text-center items-center'>
          {/* Cat icons */}
          <div className='flex gap-2 md:gap-4 mb-6 md:mb-10 opacity-60'>
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
          </div>

          {/* Reveal text */}
          <h1 className='text-[20px] sm:text-sm md:text-2xl lg:text-3xl font-black uppercase leading-[1.3] md:leading-[1.6] flex flex-wrap justify-center'>
            {wordsData.map(({ word, range, isPrimary }, i) => (
              <Word key={i} progress={scrollYProgress} range={range} isPrimary={isPrimary}>
                {word}
              </Word>
            ))}
          </h1>
        </div>
      </motion.div>
    )
  },
)
