import './globals.css'

import { Inter } from 'next/font/google'

import { ClientSidebar } from '@/components/common/ClientSidebar'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M - music',
  description: 'music - new music platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-full min-w-[100vw] ml-16 -mt-10 z-20">
          <div className=" absolute">{children}</div>
        </main>
        <ClientSidebar />
      </body>
    </html>
  )
}
