import { imgs, footerData } from '@/config/marginals/footer'

const SocialLinks = () => {
  return (
    <div className='flex flex-wrap items-center gap-5 md:gap-6 text-xs sm:text-sm md:text-base font-bold tracking-wide text-white'>
      <a
        href={footerData.socials.instagram.url}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity'
      >
        <img src={imgs.instagramlogo} alt='Instagram' className='size-5 md:size-6' />
        <span className='font-obvia'>
          <span className='font-inter pr-[0.1rem] -ml-1'>@</span>
          {footerData.socials.instagram.handle}
        </span>
      </a>

      <a
        href={footerData.socials.email.mailto}
        className='flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity'
      >
        <img src={imgs.envelope} alt='Email' className='size-5 md:size-6' />
        <span className='font-obvia -ml-1'>
          {footerData.socials.email.address}
          <span className='font-inter px-[0.1rem] '>@</span>gmail.com
        </span>
      </a>
    </div>
  )
}

export default SocialLinks
