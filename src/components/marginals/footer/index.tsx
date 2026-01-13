import { imgs } from '@/config/marginals/footer'
import FooterBackground from './FooterBackground'
import SocialLinks from './SocialLinks'
import ContactInfo from './ContactInfo'

const Footer = () => {
  return (
    <footer
      className='relative ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] overflow-hidden rounded-t-[80px] p-8 min-h-[50svh]'
      style={{
        borderTop: '3px solid #FF14B2',
        borderRight: '3px solid #FF14B2',
        borderLeft: '3px solid #FF14B2',
      }}
    >
      <FooterBackground />

      <div className='relative z-10 px-3 py-4 md:px-12 md:py-12 text-white overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 relative'>
          <div className='flex flex-col gap-6 z-20 w-full'>
            <div>
              <img
                src={imgs.creotextHolder}
                alt="CREO '26 Design Conference"
                className='h-auto w-40 sm:w-64 md:w-80 object-contain'
              />
            </div>

            <SocialLinks />

            <ContactInfo />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
