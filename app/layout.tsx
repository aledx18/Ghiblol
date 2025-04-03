import './globals.css'
import type { Metadata } from 'next'
import { Nunito, PT_Sans as ptSanss } from 'next/font/google'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin']
})

const ptSans = ptSanss({
  variable: '--font-pt-sans',
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Studio-memelii',
  description: 'Image gallery for memes'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${nunito.variable} ${ptSans.variable} antialiased relative`}>
        <div className='texture' />
        {children}
      </body>
    </html>
  )
}
