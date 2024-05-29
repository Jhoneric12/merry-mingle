    import React from 'react'
    import SectionTitle from './SectionTitle'
    import { ShareGifts } from '../Data/ShareGift'

    function Share() {
    return (
        <div>
            <SectionTitle title={'Share A Gift'}/>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 py-10 px-4 md:px-24 lg:px-96'>
                {
                    ShareGifts.map(share => (
                        <div key={share.id} className='card hover:translate-y-[-5px] transition duration-100 dark:bg-dark-container-color py-4 rounded-lg shadow-md flex items-center flex-col place-items-center'>
                            {/* <div>
                                <input id="heart" type="checkbox" />
                                <label for="heart">❤</label>
                            </div> */}
                            <img src={share.image} alt="" className='text-center'/>
                            <div className='text-start mt-4'>
                                <h1 className='font-semibold text-light-title-color dark:text-dark-title-color mt-auto'>${share.price}</h1>
                                <p className='text-light-text-color dark:text-dark-text-color text-sm'>{share.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    }

    export default Share