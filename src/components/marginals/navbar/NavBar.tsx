import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/config/marginals'
import logos from '@/config/logo'
import { Menu, X } from 'lucide-react'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (href.startsWith('#')) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Mobile Menu Overlay */}
      <nav
        className={`fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center space-y-8 lmd:hidden transition-all duration-300 ease-in-out  ${
          isMenuOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Button
            key={link.label}
            variant='ghost'
            asChild
            className='text-white text-base font-normal'
          >
            <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
              {link.label}
            </a>
          </Button>
        ))}
        <Button className='bg-pink-600 hover:bg-pink-700 text-black rounded-none px-8 py-6 text-xl'>
          Register Now
        </Button>
      </nav>

      <div className='hidden lmd:flex items-end justify-center w-full pointer-events-auto'>
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
            <nav className='flex-1 flex items-center justify-between bg-black/20 backdrop-blur-sm border border-white/10 px-6 min-h-[71px]'>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.label}
                  variant='ghost'
                  asChild
                  className='text-white text-base font-normal'
                >
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                    {link.label}
                  </a>
                </Button>
              ))}
            </nav>
          </div>
          {/* Right: Registration Button */}

          <Button className='bg-[#ff00bf] hover:opacity/80 text-black font-bold text-lg rounded-none w-[200px] h-[70px] px-[36px] py-[28px] flex items-center justify-center shrink-0'>
            Register Now
          </Button>
        </div>
      </div>

      <div className='fixed top-0 left-0 right-0 flex lmd:hidden items-center justify-between w-full p-4 pointer-events-auto z-60 flex-1  bg-black/20 backdrop-blur-sm border border-white/10 px-6 min-h-[71px]'>
        <div className='size-[40px] flex items-center justify-center shrink-0'>
          <img
            src={logos.CreoMobileLogo}
            alt='DesignTab'
            className='w-full h-full object-contain'
          />
        </div>

        <button
          className='text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>
        </button>
      </div>
    </>
  )
}

export default NavBar
