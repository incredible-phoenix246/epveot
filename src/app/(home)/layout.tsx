import { Suspense } from 'react'
import { Navbar } from '@/components/nav'
import { SkeletonNavbar } from '@/components/skelton'
import { Footer } from '@/components/nav/footers'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<SkeletonNavbar />}>
        <Navbar />
      </Suspense>
      {children}
      <Footer />
    </>
  )
}
