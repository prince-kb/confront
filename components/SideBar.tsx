'use client'
import React from 'react'
import { sideBarLinks } from '@/constants';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
const SideBar = () => {
    const pathname = usePathname();
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className="flex flex-1 flex-col gap-6">
            {sideBarLinks.map((link)=>{
                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                return(<Link key={link.label} href={link.route} className={cn('flex gap-4 items-center p-4 rounded-lg justify-start',{'bg-gradient-to-r from-blue-600 to-violet-600': isActive})}>
                  <Image src={link.imgUrl} alt={link.label} className='' height={24} width={24}/> {link.label}</Link>)
            })}
        </div>
    </section>
  )
}

export default SideBar