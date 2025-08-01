import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ClerkProvider} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comfront",
  description: "Video calling featured Next Application ",
  icons : {
    icon : '/icons/logo1.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <html lang="en">
      <ClerkProvider appearance={{
        layout : {
          logoImageUrl : '/icons/yoom-logo.svg',
          socialButtonsVariant : 'iconButton'
        },
        variables:{
          colorText : "#fff",
          colorPrimary : "#0E78F9",
          colorBackground : "#1c1f2e",
          colorInputBackground : '#252A41',
          colorInputText : '#fff'
        }
      }}>
      <body className={`${inter.className} bg-dark-2`}>
        {children}
        <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
