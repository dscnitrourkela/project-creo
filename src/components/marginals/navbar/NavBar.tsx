import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/config/marginals'
import logos from '@/config/logo'
import { Menu, X } from 'lucide-react'
import { registerFn } from '@/utils/registerFn'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const footer = document.querySelector('footer')
          const windowHeight = window.innerHeight

          const isFooterVisible = footer ? footer.getBoundingClientRect().top < windowHeight : false

          if (isFooterVisible) {
            setIsVisible(false)
          } else {
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
              setIsVisible(true)
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
              setIsVisible(false)
            }
          }

          setLastScrollY(currentScrollY)
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
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
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 lmd:hidden transition-all duration-300 ease-in-out  ${
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
            <a href={link.href} onClick={(e) => handleScrollToSection(e, link.href)}>
              {link.label}
            </a>
          </Button>
        ))}
        <Button
          className='bg-pink-600 hover:bg-pink-700 text-black rounded-none px-8 py-6 text-xl'
          onClick={registerFn}
        >
          Register Now
        </Button>
      </nav>

      {/* Desktop/Bottom Navbar Container */}
      <div
        className={`hidden lmd:flex items-end justify-center w-full pointer-events-auto transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 -translate-y-10' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className='flex items-center gap-[21px] h-[84px] w-[1012px] max-w-full'>
          <div className='flex items-center gap-[10px] h-[84px] w-[1012px] max-w-full'>
            {/* Left: DesignTab Logo in Pink Box */}
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
                  <a href={link.href} onClick={(e) => handleScrollToSection(e, link.href)}>
                    {link.label}
                  </a>
                </Button>
              ))}
            </nav>
          </div>
          {/* Right: Registration Button */}
          <Button
            className='bg-[#ff00bf] hover:opacity/80 text-black font-bold text-lg rounded-none w-[200px] h-[70px] px-[36px] py-[28px] flex items-center justify-center shrink-0'
            onClick={registerFn}
          >
            Register Now
          </Button>
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <div className='fixed top-0 left-0 right-0 flex lmd:hidden items-center justify-between w-full p-4 pointer-events-auto z-60 flex-1 px-6'>
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
            className={`transition-transform duration-300 ease-in-out bg-black p-2 rounded-sm ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </div>
        </button>
      </div>
    </>
  )
}

export default NavBar
