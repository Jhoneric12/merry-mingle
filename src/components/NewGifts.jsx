import React from 'react'
import SectionTitle from './SectionTitle'
import { Newgifts } from '../Data/NewGift'
import '../styles/utils.css'

function NewGifts() {
  return (
    <div className='py-24 md:px-30 lg:px-60'>
        <SectionTitle title={'New Gifts'}/>
        <div className='card-wrapper py-10 flex justify-around items-center overflow-x-auto gap-6 md:gap-4 rounded-xl px-6'>
            {
                Newgifts.map(newgift => (
                    <div key={newgift.id} className=' card shadow-md w-[20rem] rounded-lg text-center pb-6 shrink-0 h-auto hover:translate-y-[-5px] transition duration-100 z-10'>
                        <div className='bg-light-primary-color flex justify-center items-center rounded-b-[50%] rounded-lg shadow-md py-6 mb-6 z-99'>
                            <img src={newgift.image} alt="" />
                        </div>
                        <h1 className='text-light-title-color dark:text-dark-title-color font-semibold text-xl mt-auto'>${newgift.price}</h1>
                        <p className='text-light-text-color text-sm'>{newgift.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewGifts