import { useState } from 'react'
import { Button } from '@/components/ui/button'
import logos from '@/assets/imgs/logo'
import { Menu, X } from 'lucide-react'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center space-y-8 md:hidden'>
          <button
            onClick={() => setIsMenuOpen(false)}
            className='absolute top-6 right-6 text-white hover:text-pink-500'
          >
            <X size={32} />
          </button>
          <a href='#' className='text-2xl text-white font-bold'>
            Home
          </a>
          <a href='#' className='text-2xl text-white font-bold'>
            Why Participate?
          </a>
          <a href='#' className='text-2xl text-white font-bold'>
            Event Details
          </a>
          <a href='#' className='text-2xl text-white font-bold'>
            Our Guests
          </a>
          <a href='#' className='text-2xl text-white font-bold'>
            FAQs
          </a>
          <Button className='bg-pink-600 hover:bg-pink-700 text-black rounded-none px-8 py-6 text-xl'>
            Registration Now
          </Button>
        </div>
      )}

      {/* Desktop Container - centered and sized */}
      <div className='hidden md:flex items-end justify-center w-full pointer-events-auto'>
        <div className='flex items-center gap-[21px] h-[84px] w-[1012px] max-w-full'>
          <div className='flex items-center gap-[10px] h-[84px] w-[1012px] max-w-full'>
            {/* Left: DesignTab Logo in Pink Box */}
            {/* width: 71; height: 71; padding: 5px 6px */}
            <div className='bg-[#ff00bf] w-[71px] h-[71px] px-[6px] py-[5px] flex items-center justify-center shrink-0'>
              <img
                src={logos.DesignTabNavbar}
                alt='DesignTab'
                className='w-full h-full object-contain'
              />
            </div>

            {/* Center: Desktop Nav Links */}
            {/* Height matches button/container usually, but specs said whole navbar height 84. 
                        The other elements are 71 and 70 high. This implies they are likely vertically centered or aligned bottom? 
                        The nav links bar usually fills the remaining space or is sized. 
                        The user image showed a dark bar. Let's make it fill height or align. 
                        Image shows them aligned. Let's assume the nav bar fills the remaining width or just wraps links.
                    */}
            <nav className='flex-1 flex items-center justify-between bg-black/20 backdrop-blur-sm border border-white/10 px-6 h-[71px]'>
              <Button variant='ghost' className='text-white text-base font-normal'>
                Home
              </Button>
              <Button variant='ghost' className='text-white text-base font-normal'>
                Why Participate?
              </Button>
              <Button variant='ghost' className='text-white text-base font-normal'>
                Event Details
              </Button>
              <Button variant='ghost' className='text-white text-base font-normal'>
                Our Guests
              </Button>
              <Button variant='ghost' className='text-white text-base font-normal'>
                FAQs
              </Button>
            </nav>
          </div>
          {/* Right: Registration Button */}
          {/* width: 238; height: 70; padding: 28px 36px */}
          <Button className='bg-[#ff00bf] hover:bg-pink-700 text-black font-bold text-lg rounded-none w-[238px] h-[70px] px-[36px] py-[28px] flex items-center justify-center shrink-0'>
            Registration Now
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='flex md:hidden items-end justify-end w-full p-4 pointer-events-auto'>
        <button className='text-white' onClick={() => setIsMenuOpen(true)}>
          <Menu size={32} />
        </button>
      </div>
    </>
  )
}

export default NavBar
