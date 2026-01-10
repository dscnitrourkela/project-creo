import { imgs, footerData } from '@/config/marginals/footer'

const SocialLinks = () => {
  return (
    <div className='flex flex-wrap items-center gap-3 md:gap-6 text-xs sm:text-sm md:text-base font-bold tracking-wide text-white font-inter'>
      {/* Instagram */}
      <a
        href={footerData.socials.instagram.url}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity'
      >
        <img src={imgs.instagramlogo} alt='Instagram' className='w-4 h-4 md:w-6 md:h-6' />
        <span>{footerData.socials.instagram.handle}</span>
      </a>

      {/* Divider Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_theme('colors.pink.500')]" />

      {/* Email */}
      <a
        href={footerData.socials.email.mailto}
        className='flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity'
      >
        <img src={imgs.envelope} alt='Email' className='w-4 h-4 md:w-6 md:h-6' />
        <span>{footerData.socials.email.address}</span>
      </a>
    </div>
  )
}

export default SocialLinks
