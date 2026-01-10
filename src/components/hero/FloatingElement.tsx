import { forwardRef } from 'react'

interface FloatingElementProps {
  src: string
  alt: string
  className?: string
}

const FloatingElement = forwardRef<HTMLDivElement, FloatingElementProps>(
  ({ src, alt, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute z-20 pointer-events-none transition-transform duration-100 ease-out ${className}`}
      >
        <img src={src} alt={alt} className='w-full object-contain' />
      </div>
    )
  },
)

FloatingElement.displayName = 'FloatingElement'

export default FloatingElement
