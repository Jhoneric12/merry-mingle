import React, { useContext } from 'react'
// import { DarkMode } from '../Contexts/DarkModeContext'
import useDarkMode from '../Hooks/useDarkMode';
import MerryLogo from '../assets/merry-logo.png'

function Navbar() {

  const {darkMode, setDarkMode} = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <nav className='flex items-center justify-between p-6 md:justify-around fixed w-full z-30'>
      <a className="logo flex items-center gap-4" href='#'>
        <img src={MerryLogo} alt="" />
        <h1 className='text-light-title-color dark:text-dark-title-color font-semibold'>Merry Mingle</h1>
      </a>
      <div className="control flex gap-4 md:gap-10 items-center font-regular text-light-title-color dark:text-dark-title-color">
          <ul className='hidden md:flex gap-10 text-base'>
            <li className='hover:text-light-primary-color dark:hover:text-dark-primary-color'>Home</li>
            <li className='hover:text-light-primary-color dark:hover:text-dark-primary-color'>Celebrate</li>
            <li className='hover:text-light-primary-color dark:hover:text-dark-primary-color'>Gifts</li>
            <li className='hover:text-light-primary-color dark:hover:text-dark-primary-color'>New</li>
          </ul>
          {
          darkMode 
          ? 
          <svg className='hover:text-light-primary-color dark:hover:text-dark-primary-color w-6 h-6' onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          :
          <svg className='hover:text-light-primary-color dark:hover:text-dark-primary-color w-6 h-6' onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
          }
          <svg className='md:hidden w-6 h-6 hover:text-light-primary-color dark:hover:text-dark-primary-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
      </div>
    </nav>
  )
}

export default Navbar