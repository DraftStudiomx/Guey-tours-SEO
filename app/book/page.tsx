import BookingWidget from '@/components/BookingWidget'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Book a Tour | Guey Tours',
  robots: 'noindex', // keep off search engines
}

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#111111', paddingTop: '80px', paddingBottom: '4rem' }}>
        <BookingWidget />
      </main>
      <Footer />
    </>
  )
}
