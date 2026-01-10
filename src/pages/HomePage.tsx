import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/hero/Hero'
import Preloader from '@/components/ui/Preloader'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <Hero />
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader key='preloader' onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
    </>
  )
}
