import { imgs } from '@/config/marginals/footer'
import FooterBackground from './components/FooterBackground'
import SocialLinks from './components/SocialLinks'
import ContactInfo from './components/ContactInfo'

const Footer = () => {
  return (
    <footer className='relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] overflow-hidden rounded-t-[28px] pb-[env(safe-area-inset-bottom)]'>
      <FooterBackground />

      {/* CONTENT */}
      <div className='relative z-10 px-3 py-4 md:px-12 md:py-12 text-white overflow-hidden'>
        {/* Main Content Area */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 relative font-inter'>
          {/* Left Side: Logo & Socials */}
          <div className='flex flex-col gap-6 max-w-lg z-20 w-full'>
            {/* Logo Section */}
            <div>
              <img
                src={imgs.creotextHolder}
                alt="CREO '26 Design Conference"
                className='h-auto w-40 sm:w-64 md:w-80 object-contain'
              />
            </div>

            {/* Social Links */}
            <SocialLinks />

            {/* Contact Info (Aligned with Logo) */}
            <ContactInfo />
          </div>
        </div>

        {/* Credits (Relative on mobile to prevent overlap, Absolute Bottom Right on Desktop) */}
        <div className='flex justify-end mt-8 mr-2 md:mt-0 md:mr-0 md:absolute md:bottom-6 md:right-12 z-20 opacity-80'>
          <img
            src={imgs.textdsc}
            alt='Crafted by DSC NIT Rourkela'
            className='h-4 md:h-6 object-contain'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
