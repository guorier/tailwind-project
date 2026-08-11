import type { Metadata } from 'next'
import { ReduxProvider } from '@/redux/provider'

import '@/styles/globals.css'
import '@/styles/fonts/pretendard.css'

import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';

import AlertDialog from '@/components/Alert/AlertDialog'
import ConfirmDialog from '@/components/Alert/ConfirmDialog'
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: 'Common UI / Component System',
  description: 'A modular component system for building consistent interfaces.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className='text-lato'>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />

          <AlertDialog />
          <ConfirmDialog />
          <Toaster duration={10000} />
        </ReduxProvider>
      </body>
    </html>
  )
}
