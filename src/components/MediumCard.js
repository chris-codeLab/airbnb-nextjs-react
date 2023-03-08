import React from 'react'
import Image from 'next/legacy/image';

const MediumCard = ({img, title}) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300'>
        <div className='relative h-60 w-60'>
       <Image 
        className='rounded-xl'
        src={img}
        layout='fill'
        alt={title}

       />
       </div>
       <h4 className='text-1xl mt-3 text-gray-800'>{title}</h4>
    </div>
  )
}

export default MediumCard;