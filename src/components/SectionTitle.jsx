import React from 'react'

function SectionTitle( {title} ) {
  return (
    <div className='w-full text-center text-xl font-semibold px-[6rem] text-light-title-color dark:text-dark-title-color'>
        <h1>{title}</h1>
    </div>
  )
}

export default SectionTitle