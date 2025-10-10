import Link from 'next/link'

export default function ArticlesSection() {
  return (
    <section className="py-10 px-5 bg-white text-center">
      <h3 className="font-montserrat text-4xl text-[#071D3B] mb-8">
        Artigos
      </h3>

      <div className="flex justify-center gap-5 flex-wrap max-w-7xl mx-auto">
        {/* Artigo 1 */}
        <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
          <h4 className="font-montserrat text-xl text-[#071D3B] mb-4">
            Neurodivergência: O Que É e Por Que Importa?
          </h4>
          <p className="text-gray-600 mb-4">
            Explore os conceitos fundamentais da neurodivergência e sua importância na sociedade atual. 
            Descubra como a compreensão desse tema pode transformar vidas.
          </p>
          <div className="absolute inset-0 bg-[#071D3B] bg-opacity-90 text-white p-5 translate-y-full group-hover:translate-y-0 transition-transform">
            <p className="mb-4">
              Um guia completo sobre neurodivergência e seu impacto na sociedade.
            </p>
            <Link 
              href="/artigos/neurodivergencia" 
              className="bg-[#F6B600] text-[#071D3B] px-4 py-2 rounded inline-block hover:bg-[#e0a500] transition-colors"
            >
              Leia Mais
            </Link>
          </div>
        </div>

        {/* Artigo 2 */}
        <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
          <h4 className="font-montserrat text-xl text-[#071D3B] mb-4">
            Desenvolvimento Emocional e Neurodiversidade
          </h4>
          <p className="text-gray-600 mb-4">
            Aprenda sobre as diferentes formas de apoiar o desenvolvimento emocional de pessoas 
            neurodivergentes, com estratégias práticas e baseadas em evidências.
          </p>
          <div className="absolute inset-0 bg-[#071D3B] bg-opacity-90 text-white p-5 translate-y-full group-hover:translate-y-0 transition-transform">
            <p className="mb-4">
              Estratégias práticas para apoio emocional e desenvolvimento.
            </p>
            <Link 
              href="/artigos/desenvolvimento-emocional" 
              className="bg-[#F6B600] text-[#071D3B] px-4 py-2 rounded inline-block hover:bg-[#e0a500] transition-colors"
            >
              Leia Mais
            </Link>
          </div>
        </div>

        {/* Artigo 3 */}
        <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
          <h4 className="font-montserrat text-xl text-[#071D3B] mb-4">
            Inclusão e Acessibilidade na Era Digital
          </h4>
          <p className="text-gray-600 mb-4">
            Como a tecnologia pode ser uma aliada na promoção da inclusão e acessibilidade 
            para pessoas neurodivergentes no mundo digital.
          </p>
          <div className="absolute inset-0 bg-[#071D3B] bg-opacity-90 text-white p-5 translate-y-full group-hover:translate-y-0 transition-transform">
            <p className="mb-4">
              Descubra as últimas inovações em tecnologia assistiva.
            </p>
            <Link 
              href="/artigos/inclusao-digital" 
              className="bg-[#F6B600] text-[#071D3B] px-4 py-2 rounded inline-block hover:bg-[#e0a500] transition-colors"
            >
              Leia Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
