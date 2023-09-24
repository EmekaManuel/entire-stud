import './globals.css'
import type { Metadata } from 'next'
import {  Space_Mono, Courier_Prime } from 'next/font/google'
import { StoreProvider } from '@/redux/StoreProvider'
import App from '@/components/App'

const space = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space',
  display:'swap',
  weight:['400','700']
})

const courier = Courier_Prime({
  subsets: ["latin"],
  variable: '--font-courier',
  weight:['400','700'],
  display:'swap'
})

export const metadata: Metadata = {
  title: 'Entire Studios',
  description: 'Generated by create next app ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${courier.variable} ${space.variable}`}>
       <StoreProvider>
        <App>{children}</App>
        </StoreProvider>
        </body>
    </html>
  )
}