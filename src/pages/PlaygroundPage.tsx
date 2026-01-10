import Hero from '@/components/hero/Hero'
import Footer from '@/components/footer/Footer'
import PlaygroundContent from '@/components/ui/playground'
import ApplySection from '@/components/ui/applySection'

export default function Playground() {
  return (
    <main className='w-full overflow-x-hidden'>
      <PlaygroundContent />
      <Hero />     
      <ApplySection />
      <Footer />
    </main>
  )
}
