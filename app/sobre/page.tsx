import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Sobre() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Hero */}
      <section className="relative h-[400px]">
        <Image
          src="/imagens/img2.jpg"
          alt="Sobre o BrainWave Connect"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="font-montserrat text-5xl font-bold mb-4">
              Sobre Nós
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Transformando vidas através do suporte à neurodiversidade
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl text-primary mb-6">
            Nossa História
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            A BrainWave Connect nasceu da necessidade de criar um espaço inclusivo e 
            acolhedor para pessoas neurodivergentes e suas famílias. Fundada por um grupo 
            de profissionais apaixonados por educação especial e tecnologia, nossa plataforma 
            tem como objetivo unir conhecimento, suporte e comunidade em um só lugar.
          </p>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Missão */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl text-primary text-center mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Transformar a vida de pessoas neurodivergentes e suas famílias, proporcionando 
                suporte especializado, recursos educacionais e uma comunidade acolhedora para o 
                desenvolvimento pleno de suas potencialidades.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl text-primary text-center mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ser a principal plataforma de apoio à neurodiversidade no Brasil, reconhecida 
                pela excelência no suporte, inovação em recursos educacionais e impacto positivo 
                na vida das pessoas.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl text-primary text-center mb-4">
                Nossos Valores
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Respeito à diversidade
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Inclusão e acessibilidade
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Inovação e qualidade
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Empatia e acolhimento
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Compromisso com o desenvolvimento
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl mb-6">
            Faça Parte da Nossa Comunidade
          </h2>
          <p className="text-lg mb-8">
            Junte-se a milhares de famílias que já encontraram apoio e recursos 
            essenciais para o desenvolvimento de pessoas neurodivergentes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/cadastro"
              className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-hover-secondary transition-colors"
            >
              Cadastre-se Agora
            </Link>
            <Link 
              href="/contato"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
