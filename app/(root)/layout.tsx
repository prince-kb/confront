import StreamVideoProvider from '@/providers/StreamClientProvider'
import React,{ReactNode} from 'react'

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