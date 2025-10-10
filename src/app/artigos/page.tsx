import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const articles = [
  {
    id: 'neurodivergencia',
    title: 'Neurodivergência: O Que É e Por Que Importa?',
    excerpt: 'Explore os conceitos fundamentais da neurodivergência e sua importância na sociedade atual.',
    image: '/imagens/img13.jpg',
    category: 'Neurociência',
    date: 'setembro 9, 2025',
  },
  {
    id: 'desenvolvimento-emocional',
    title: 'Desenvolvimento Emocional e Neurodiversidade',
    excerpt: 'Aprenda sobre as diferentes formas de apoiar o desenvolvimento emocional de pessoas neurodivergentes.',
    image: '/imagens/img14.jpg',
    category: 'Desenvolvimento',
    date: 'setembro 9, 2025',
  },
  {
    id: 'inclusao-digital',
    title: 'Inclusão e Acessibilidade na Era Digital',
    excerpt: 'Como a tecnologia pode ser uma aliada na promoção da inclusão e acessibilidade.',
    image: '/imagens/img15.jpg',
    category: 'Tecnologia',
    date: 'setembro 9, 2025',
  },
  // Adicione mais artigos aqui
]

export default function Artigos() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Banner */}
      <section className="relative h-[300px]">
        <Image
          src="/imagens/img1.jpg"
          alt="Banner artigos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-montserrat text-4xl mb-4">
              Artigos e Recursos
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-4">
              Explore nosso acervo de artigos sobre neurodiversidade, desenvolvimento e inclusão.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="font-montserrat text-xl text-primary mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/artigos/${article.id}`}
                    className="bg-secondary text-primary px-6 py-2 rounded inline-block hover:bg-hover-secondary transition-colors"
                  >
                    Ler mais
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
