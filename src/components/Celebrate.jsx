import React from 'react'
import CelebrateMobile from '../assets/celebrate-mobile.png'
import CelebrateDesktop from '../assets/celebrate-desktop.png'
import Button from './Button'

function Celebrate() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center text-center h-screen px-10 gap-4'>
        <div className="description flex flex-col items-center md:items-start gap-4 md:w-[40%] md:text-left">
            <h1 className='text-2xl md:text-5xl text-light-title-color font-semibold dark:text-dark-title-color'>Celebrate With a Lot of Love</h1>
            <p className='text-sm text-light-text-color dark:text-dark-text-color'>In this holidays, celebrate with much love and peace, offering many blessings to our loved ones, friends and neighbors, wishing them a good Christmas message.</p>
            <Button btnText={'Send Good Wishes'}/> 
        </div>
        <div className="image text-center">
            <img src={CelebrateMobile} alt="" className='md:hidden' />
            <img src={CelebrateDesktop} alt="" className='hidden md:block'/>
        </div>
    </div>
  )
}

export default Celebrate