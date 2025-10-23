import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Sobre() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Título da Página */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-montserrat text-4xl font-bold text-[#071D3B] text-center mb-4">
            Conheça um pouco mais sobre nós
          </h1>
        </div>
      </section>

      {/* Cards de Informação */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Sobre nós */}
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col min-h-[400px]">
              <h2 className="font-montserrat text-2xl font-semibold text-[#071D3B] mb-6">
                Sobre nós
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-8 flex-grow">
                Na BrainWave Connect, cada detalhe é pensado para garantir que nossos serviços atendam às necessidades de quem mais precisa. Estamos comprometidos em oferecer um suporte que vai além do convencional, trabalhando para que todos se sintam valorizados e capacitados a viver uma vida plena e satisfatória.
              </p>
              <button className="bg-[#FFC107] text-[#071D3B] px-6 py-3 rounded font-medium hover:bg-[#e6ad00] transition-colors self-start">
                Saiba mais
              </button>
            </div>

            {/* Nosso objetivo */}
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col min-h-[400px]">
              <h2 className="font-montserrat text-2xl font-semibold text-[#071D3B] mb-6">
                Nosso objetivo
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-8 flex-grow">
                Nossa missão é criar um ambiente digital inclusivo e acessível que ofereça suporte integral e personalizado para pessoas com deficiência cognitiva. Por meio de uma plataforma online inovadora, disponibilizamos uma equipe de psicólogos qualificados e recursos especializados para promover o bem-estar, o desenvolvimento pessoal e a autonomia de nossos usuários.
              </p>
              <button className="bg-[#FFC107] text-[#071D3B] px-6 py-3 rounded font-medium hover:bg-[#e6ad00] transition-colors self-start">
                Saiba mais
              </button>
            </div>

            {/* Comunidade */}
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col min-h-[400px]">
              <h2 className="font-montserrat text-2xl font-semibold text-[#071D3B] mb-6">
                Comunidade
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-8 flex-grow">
                Comunidade e inclusão: Promovemos um ambiente inclusivo onde nossos usuários podem se conectar, compartilhar experiências e encontrar suporte mútuo. Acreditamos na força da comunidade e na importância de construir redes de apoio.
              </p>
              <button className="bg-[#FFC107] text-[#071D3B] px-6 py-3 rounded font-medium hover:bg-[#e6ad00] transition-colors self-start">
                Saiba mais
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
