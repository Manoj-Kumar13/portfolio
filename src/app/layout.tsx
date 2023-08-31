import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

// const inter = Inter({ subsets: ['latin'] })
// className={inter.className}

export const metadata: Metadata = {
  title: 'Manoj Kumar',
  description: 'Portfolio of Manoj Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='py-5 px-24'>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
