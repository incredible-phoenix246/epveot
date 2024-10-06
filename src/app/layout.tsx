import type { Metadata } from 'next'
import StateContextProvider from '@/context/stateCtx'
import { unica, raleway } from '@/fonts'
import { cn } from '@/utils'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Epveot',
  description: 'We Are Professional Quality Services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <StateContextProvider>
        <body
          className={cn('bg-brand-white', raleway.className, unica.variable)}
        >
          {children}
        </body>
      </StateContextProvider>
    </html>
  )
}
