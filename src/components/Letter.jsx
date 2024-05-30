import React from 'react'
import Button from './Button'
import LetterMobile from '../assets/letter.png'
import LetterDesktop from '../assets/letter-desktop.png'

function Letter() {
  return (
    <div className='py-24 px-6 md:px-30 lg:px-40 flex justify-center items-center'>
        <div className='bg-light-primary-color w-full rounded-xl py-10 px-4 md:flex justify-center gap-10'>
            <div className='flex flex-col justify-center items-center md:items-start md:w-[40%]'>
                <h1 className='font-semibold text-xl text-white md:text-2xl'>Send us good wishes!</h1>
                <input type="text" className=' rounded-full py-4 px-6 w-[90%] md:w-full text-sm mt-6' placeholder='Write your message'/>
                <Button
                    btnText={'Send Message'}
                    styles={'bg-light-title-color w-[90%]'}
                />
            </div>
            <div className='flex justify-center items-center mt-6 z-10'>
                <img src={LetterMobile} alt="" className='lg:hidden z-90'/>
                <img src={LetterDesktop} alt="" className='hidden lg:block z-90' />
            </div>
        </div>
    </div>
  )
}

export default Letter