import React from 'react'
import SectionTitle from './SectionTitle'
import { Givings } from '../Data/Give'

function Giving() {
  return (
    <div>
        <SectionTitle title={'Start Giving This Christmas'}/>
        <div className='grid grid-cols-2 grid-rows-2 place-items-center py-10 px-4 gap-6 md:flex md:justify-center md:gap-10'>
            {
                Givings.map(giving => (
                    <div className='flex flex-col items-center justify-center rounded-lg p-4 text-center gap-2 shadow-md md:shadow-none' key={giving.id}>
                        <img src={giving.image} alt="" />
                        <h1 className='text-light-title-color dark:text-dark-title-color font-semibold mt-auto' >{giving.title}</h1>
                        <p className='text-light-text-color dark:text-dark-text-color text-sm mt-auto w-3/4 mt-auto'>{giving.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Giving