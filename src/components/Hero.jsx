import React from 'react'
import HomeMobile from '../assets/home-mobile.png'
import HomeDesktop from '../assets/home-desktop.png'
import Button from './Button'

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center text-center h-screen px-20 gap-4'>
        <div className="image">
            <img src={HomeMobile} alt="" className='md:hidden' />
            <img src={HomeDesktop} alt="" className='hidden md:block'/>
        </div>
        <div className="description flex flex-col items-center md:items-start gap-4 md:w-1/2 md:text-left">
            <h1 className='text-2xl md:text-6xl text-light-title-color font-semibold dark:text-dark-title-color leading-loose'>Merry Christmas and Happy New Year!</h1>
            <p className='text-sm text-light-text-color dark:text-dark-text-color'>Christmas and a new year is about to begin, all good wishes and successes.</p>
            <Button btnText={'Get Started'}/> 
        </div>
    </div>
  )
}

export default Hero