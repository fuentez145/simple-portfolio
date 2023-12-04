import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { PTSans } from '@/components/fonts/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gilbert Fuentes',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`} >
        <NavBar />
        {children}</body>
    </html>
  )
}
