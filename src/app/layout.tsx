import './globals.css'

import { Inter } from 'next/font/google'

import { ClientSidebar } from '@/components/common/ClientSidebar'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M - music',
  description: 'Music - new music platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSidebar Children={children} />
      </body>
    </html>
  )
}
