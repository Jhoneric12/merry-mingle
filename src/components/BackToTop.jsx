import React from 'react'
import Button from './Button'
import '../styles/utils.css'

function BackToTop() {
  return (
    <a href='#' className='shadow-lg'>
        <button className='hidden bg-light-primary-color text-white fixed backtotop bottom-10 right-10 rounded-full px-2 py-2  transition duration-300 z-90'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    </a>
  )
}

export default BackToTop