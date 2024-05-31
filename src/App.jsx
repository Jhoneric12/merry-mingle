import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Giving from './components/Giving'
import Celebrate from './components/Celebrate'
import Share from './components/Share'
import NewGifts from './components/NewGifts'
import Letter from './components/Letter'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import useDarkMode from './Hooks/useDarkMode'

function App() {

  const {darkMode, setDarkMode} = useDarkMode();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      const backTop = document.querySelector('.backtotop')
      const scroll = window.scrollY;

      if (scroll > 0) {
        navbar.style.position = 'static'
        backTop.style.display = 'block'
      }
      else {
        navbar.style.position = 'fixed'
        backTop.style.display = 'none'
      }
    })
  });

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className='bg-light-body-color dark:bg-dark-body-color select-none z-10'>
        <Navbar/>
        <Hero/>
        <Giving/>
        <Celebrate/>
        <Share/>
        <NewGifts/>
        <Letter/>
        <Footer/>
        <BackToTop/>
      </div>
    </div>
  )
}

export default App
