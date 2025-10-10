import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Sobre() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="py-10 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat text-4xl text-primary text-center mb-8">
            Sobre Nós
          </h2>

          <div className="flex flex-wrap gap-5 justify-center">
            {/* Missão */}
            <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md">
              <strong className="font-montserrat text-xl text-primary block mb-4">
                Nossa Missão
              </strong>
              <p className="text-gray-600 mb-5">
                Transformar a vida de pessoas neurodivergentes e suas famílias, proporcionando 
                suporte especializado, recursos educacionais e uma comunidade acolhedora para o 
                desenvolvimento pleno de suas potencialidades.
              </p>
              <Link 
                href="/missao" 
                className="bg-secondary text-primary px-6 py-3 rounded inline-block hover:bg-hover-secondary transition-colors"
              >
                Saiba Mais
              </Link>
            </div>

            {/* Visão */}
            <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md">
              <strong className="font-montserrat text-xl text-primary block mb-4">
                Nossa Visão
              </strong>
              <p className="text-gray-600 mb-5">
                Ser a principal plataforma de apoio à neurodiversidade no Brasil, reconhecida 
                pela excelência no suporte, inovação em recursos educacionais e impacto positivo 
                na vida das pessoas.
              </p>
              <Link 
                href="/visao" 
                className="bg-secondary text-primary px-6 py-3 rounded inline-block hover:bg-hover-secondary transition-colors"
              >
                Saiba Mais
              </Link>
            </div>

            {/* Valores */}
            <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md">
              <strong className="font-montserrat text-xl text-primary block mb-4">
                Nossos Valores
              </strong>
              <p className="text-gray-600 mb-5">
                • Respeito à diversidade<br />
                • Inclusão e acessibilidade<br />
                • Inovação e qualidade<br />
                • Empatia e acolhimento<br />
                • Compromisso com o desenvolvimento
              </p>
              <Link 
                href="/valores" 
                className="bg-secondary text-primary px-6 py-3 rounded inline-block hover:bg-hover-secondary transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* História */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h3 className="font-montserrat text-2xl text-primary mb-6">
              Nossa História
            </h3>
            <p className="text-gray-600 mb-8">
              A BrainWave Connect nasceu da necessidade de criar um espaço inclusivo e 
              acolhedor para pessoas neurodivergentes e suas famílias. Fundada por um grupo 
              de profissionais apaixonados por educação especial e tecnologia, nossa plataforma 
              tem como objetivo unir conhecimento, suporte e comunidade em um só lugar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
