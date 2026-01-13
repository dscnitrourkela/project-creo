import Hero from '@/components/hero/Hero'
import Footer from '@/components/marginals/footer'
import PlaygroundContent from '@/components/ui/playground'
import ApplySection from '@/components/applySection'

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
