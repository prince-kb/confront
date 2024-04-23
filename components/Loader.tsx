import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center fixed left-1/2 top-[40vh]'>
        <Image src='icons/loading-circle.svg' alt='Loading' width={150} height={150}/>
    </div>
  )
}

export default Loader