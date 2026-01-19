import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/hero/Hero'
import Preloader from '@/components/ui/Preloader'
import ApplySection from '@/components/applySection'
import Footer from '@/components/marginals/footer'
import NavBar from '@/components/marginals/navbar/NavBar'
import { About } from '../components/about/About'
import { FAQSection } from '@/components/faq'
import EventDetails from '@/components/event/EventDetails'

import Card from '@/components/event/Card'

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
      <div className='w-full h-20 bg-linear-to-b from-transparent to-black -mt-20 relative z-40 pointer-events-none'></div>
      <About />
      <ApplySection />
      <EventDetails />
      <div className='relative z-20 -mt-20 md:-mt-32 -mb-28 md:-mb-40 w-full pointer-events-none flex justify-center'>
        <div className='w-full pointer-events-auto'>
          <Card />
        </div>
      </div>
      <FAQSection />
      <Footer />
    </main>
  )
}
