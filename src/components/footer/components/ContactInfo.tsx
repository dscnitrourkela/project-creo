import { imgs, footerData } from '@/config/marginals/footer'
import { Small } from '@/components/ui/typography'

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 mt-4 md:mt-8'>
      {/* Phone Numbers */}
      <div className='flex flex-col md:flex-row gap-3 md:gap-16 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider'>
        {footerData.contacts.map((contact, index) => (
          <div key={index} className='flex items-center gap-3 md:gap-4'>
            <div className='bg-white/10 p-2 md:p-2.5 rounded-xl backdrop-blur-md border border-white/10'>
              <img src={imgs.phone} alt='Phone' className='w-7 h-7 md:w-10 md:h-10' />
            </div>
            <div className='flex flex-col gap-0.5'>
              <Small className='text-white/60 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest font-inter'>
                {contact.name}
              </Small>
              <a
                href={contact.tel}
                className='hover:text-pink-300 transition-colors tracking-widest font-inter'
              >
                {contact.phone}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* "Contact Us" Image Header */}
      <div className='mt-1 md:mt-2 text-left'>
        <img src={imgs.contacttext} alt='Contact Us' className='h-3 md:h-5 object-contain' />
      </div>
    </div>
  )
}

export default ContactInfo
