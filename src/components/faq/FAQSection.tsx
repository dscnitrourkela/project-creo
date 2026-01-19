import { useState } from 'react'
import { Accordion } from '@/components/ui/accordion'
import { faqs } from '@/config/faq'
import { faqImages } from '@/config/faq/images'
import { FAQHeader } from './FAQHeader'
import { FAQItemComponent } from './FAQItem'

export function FAQSection() {
  const [expandedItem, setExpandedItem] = useState<string | undefined>(undefined)

  return (
    <section
      className='w-full min-h-screen bg-black px-5 sm:px-8 lg:px-12 py-10 sm:py-12 md:pb-40'
      style={{
        backgroundImage: `url('${faqImages.background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id='faqs'
    >
      <div className=' pt-40 md:pt-60 ' />

      {/* Header */}
      <FAQHeader />

      {/* Accordion List - responsive max-width and padding */}
      <div className='mx-auto w-full max-w-[821px] px-1 sm:px-4 lg:px-0'>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          value={expandedItem}
          onValueChange={setExpandedItem}
        >
          {faqs.map((faq, index) => (
            <FAQItemComponent
              key={faq.id}
              faq={faq}
              isExpanded={expandedItem === faq.id}
              isLast={index === faqs.length - 1}
            />
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection
