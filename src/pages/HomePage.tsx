import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/hero/Hero'
import Preloader from '@/components/ui/Preloader'
import ApplySection from '@/components/applySection'
import Footer from '@/components/marginals/footer'
import NavBar from '@/components/marginals/navbar/NavBar'
import { About } from '../components/about/About'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className='bg-black'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader key='preloader' onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className='fixed bottom-4 left-0 w-full z-50 px-4 md:px-8 pointer-events-none'>
        <NavBar />
      </div>

      <Hero />
      <About />
      <ApplySection />
      <Footer />
    </main>
  )
}
