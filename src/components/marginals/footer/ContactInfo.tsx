import { imgs, footerData } from '@/config/marginals/footer'
import { Small } from '@/components/ui/typography'

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-6 w-full mt-4 md:mt-8'>
      <div className='md:hidden block'>
        <img
          src={imgs.contacttext}
          alt='Contact Us'
          className='h-5 object-contain'
          loading='lazy'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-48 w-full max-w-lg'>
        {footerData.contacts.map((contact, index) => (
          <div key={index} className='flex items-center gap-3 md:gap-4 w-full group'>
            <div className='shrink-0 bg-white/10 p-2 md:p-2.5 rounded-xl backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-colors'>
              <img src={imgs.phone} alt='Phone' className='w-6 h-6 md:w-8 md:h-8 object-contain' />
            </div>

            <div className='flex flex-col justify-center'>
              <Small className='text-white whitespace-nowrap text-[10px] md:text-xs uppercase tracking-[0.2em] font-termina font-bold mb-1'>
                {contact.name}
              </Small>
              <a
                href={`tel:${contact.tel}`}
                className='text-white/60 hover:text-pink-300 transition-colors text-xs md:text-sm tracking-widest font-sailec font-medium'
              >
                {contact.phone}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='flex md:flex-row flex-col items-center justify-between w-full mt-8 md:mt-0'>
        <div className='md:block hidden'>
          <img
            src={imgs.contacttext}
            alt='Contact Us'
            className='h-3 md:h-5 object-contain'
            loading='lazy'
          />
        </div>
        <div>
          <Small className='font-gabarito text-sm md:text-base'>
            <a href={footerData.dsc} target='_blank' rel='noreferrer' className='group'>
              Made with <span className='px-[0.1rem]'>❤️</span> by{' '}
              <span className='group-hover:underline underline-offset-4'>DSC NIT Rourkela</span>
            </a>
          </Small>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
