import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import ServicesSection from '@/components/ServicesSection'
import ArticlesSection from '@/components/ArticlesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <ServicesSection />
      <hr className="max-w-7xl mx-auto" />
      <ArticlesSection />
      <Footer />
    </main>
  )
}
