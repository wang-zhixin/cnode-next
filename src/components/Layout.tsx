import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 62px - 78px)' }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
