import Image from 'next/legacy/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
        <Image 
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        alt='banner'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg text-black'>Not sure where to go? Perfect.</p>
            <button className='text-red-600 bg-white px-10 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-95 transition duration-150'>I'm flexible</button>
        </div>
    </div>
  )
}

export default Banner
