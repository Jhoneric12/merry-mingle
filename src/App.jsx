import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Giving from './components/Giving'
import Celebrate from './components/Celebrate'
import Share from './components/Share'
import NewGifts from './components/NewGifts'
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

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className='bg-light-body-color dark:bg-dark-body-color select-none z-10'>
        <Navbar/>
        <Hero/>
        <Giving/>
        <Celebrate/>
        <Share/>
        <NewGifts/>
      </div>
    </div>
  )
}

export default App
