import { memo, useMemo } from 'react'
import { motion, useTransform, MotionValue } from 'framer-motion'
import { useIsMobile } from '@/lib/useIsMobile'

interface WordProps {
  children: string
  range: [number, number]
  progress: MotionValue<number>
  isPrimary?: boolean
}

export const Word = memo(({ children, range, progress, isPrimary }: WordProps) => {
  const isMobile = useIsMobile()

  // Only use scroll-linked transform on desktop
  const opacity = useTransform(progress, range, [0.3, 1])

  // Memoize the class name
  const className = useMemo(() => (isPrimary ? 'text-primary' : 'text-white'), [isPrimary])

  // On mobile, render without motion to prevent jitter
  if (isMobile) {
    return (
      <span className='relative mx-[2px] md:mx-1 inline-block'>
        <span className={className}>{children}</span>
      </span>
    )
  }

  return (
    <span className='relative mx-[2px] md:mx-1 inline-block'>
      <span className='absolute opacity-10 select-none'>{children}</span>
      <motion.span style={{ opacity }} className={className}>
        {children}
      </motion.span>
    </span>
  )
})
