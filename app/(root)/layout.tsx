import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React,{ReactNode} from 'react'

export const metadata: Metadata = {
  title: "Confront",
  description: "Video calling featured Next Application ",
  icons : {
    icon : '/icons/logo1.svg'
  }
};

const RootLayout = ({children} : {children : ReactNode}) => {
  return (
    <div>
      <main>
        <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
      </main>
    </div>
  )
}

export default RootLayout