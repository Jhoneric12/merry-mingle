import React from 'react'
import MerryLogo from '../assets/merry-logo.png'
import GooglePlay from '../assets/google-play.png'
import AppStore from '../assets/app-store.png'

function Footer() {
  return (
    <div className='py-4'>
        <footer className='flex flex-col gap-10 px-6 py-20 md:grid md:grid-cols-4 md:place-items-center'>
            <div className='flex flex-col justify-start h-full'>
                <a href='#' className="logo flex gap-2 font-medium mb-4">
                    <img src={MerryLogo} alt="" />
                    <h1 className='text-light-title-color dark:text-dark-title-color'>Merry Mingle</h1>
                </a>
                <p className='text-xs text-light-text-color dark:text-dark-text-color'>This Christmas give a lot of love</p>
            </div>
            <div>
                <h1 className='mb-4 font-semibold text-light-title-color dark:text-dark-text-color'>Our Services</h1>
                <ul className='text-xs text-light-text-color dark:text-dark-text-color flex flex-col gap-2'>
                    <li className='hover:text-light-primary-color'>Pricing</li>
                    <li className='hover:text-light-primary-color'>Discounts</li>
                    <li className='hover:text-light-primary-color'>Shipping Mode</li>
                </ul>
            </div>
            <div>
                <h1 className='mb-4 font-semibold text-light-title-color dark:text-dark-text-color'>Support</h1>
                <ul className='text-xs text-light-text-color dark:text-dark-text-color flex flex-col gap-2'>
                    <li className='hover:text-light-primary-color'>FAQ's</li>
                    <li className='hover:text-light-primary-color'>Support Center</li>
                    <li className='hover:text-light-primary-color'>Contact Us</li>
                </ul>
            </div>
            <div>
                <h1 className='mb-4 font-semibold text-light-title-color dark:text-dark-text-color'>Available On</h1>
                <div>
                    <img src={GooglePlay} alt="" className='mb-2' />
                    <img src={AppStore} alt="" />
                </div>
            </div>
        </footer>
        <h1 className='text-center text-light-text-color-light dark:text-dark-text-color-light text-xs'>Developed by Jhon Eric Aton</h1>
    </div>
  )
}

export default Footer