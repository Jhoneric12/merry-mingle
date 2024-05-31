import React from 'react'
import Button from './Button'

function BackToTop() {
  return (
    <a href='#'>
        <Button
            btnText={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            }
            styles={'backtotop hidden bottom-10 right-10 opacity-70 rounded-full px-3 py-3'}
        />
    </a>
  )
}

export default BackToTop