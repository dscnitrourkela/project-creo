import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Countdown = () => {
  // Set target date to Feb 1, 2026
  const targetDate = new Date('2026-02-01T00:00:00').getTime()

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  // Initialize state synchronously
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  return (
    <div className='flex items-center gap-4 text-white mt-4 font-fort h-full'>
      <div className='flex flex-col items-center'>
        <span className='text-4xl md:text-6xl font-bold tracking-widest'>
          {formatNumber(timeLeft.days)}
        </span>
        <span className='text-xs md:text-sm font-light mt-2 uppercase tracking-widest'>Days</span>
      </div>
      <span className='text-4xl md:text-6xl font-bold -mt-6'>:</span>
      <div className='flex flex-col items-center'>
        <span className='text-4xl md:text-6xl font-bold tracking-widest'>
          {formatNumber(timeLeft.hours)}
        </span>
        <span className='text-xs md:text-sm font-light mt-2 uppercase tracking-widest'>Hours</span>
      </div>
      <span className='text-4xl md:text-6xl font-bold -mt-6'>:</span>
      <div className='flex flex-col items-center'>
        <span className='text-4xl md:text-6xl font-bold tracking-widest'>
          {formatNumber(timeLeft.minutes)}
        </span>
        <span className='text-xs md:text-sm font-light mt-2 uppercase tracking-widest'>
          Minutes
        </span>
      </div>
      <span className='text-4xl md:text-6xl font-bold -mt-6'>:</span>
      <div className='flex flex-col items-center'>
        <span className='text-4xl md:text-6xl font-bold tracking-widest'>
          {formatNumber(timeLeft.seconds)}
        </span>
        <span className='text-xs md:text-sm font-light mt-2 uppercase tracking-widest'>
          Seconds
        </span>
      </div>
    </div>
  )
}

export default Countdown
