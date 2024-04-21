import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';

interface HomeCardProps{
    className : string,
    img : string,
    title : string,
    desc : string,
    handleClick : ()=>void;
}

const HomeCard = ({className,img,title,desc,handleClick}:HomeCardProps) => {
  return (
     <div className={cn(' px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',className)} onClick={handleClick}>
    <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} className='h-auto w-auto'/>
    </div>
    <div className="flex flex-col gap-2">
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='font-normal text-lg'>{desc}</p>
    </div>
</div>
  )
}

export default HomeCard