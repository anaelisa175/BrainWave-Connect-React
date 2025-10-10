import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section className="py-10 px-5 bg-white text-center">
      <h3 className="font-montserrat text-4xl text-[#071D3B] mb-8">
        Nossos Serviços
      </h3>

      <div className="flex justify-center gap-5 flex-wrap max-w-7xl mx-auto">
        <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md transition-transform hover:-translate-y-2">
          <i className="fas fa-comments text-3xl text-[#071D3B] mb-4"></i>
          <h4 className="font-montserrat text-2xl text-[#071D3B] mb-3">
            Fóruns
          </h4>
          <p className="text-gray-600">
            Conecte-se com outros pais e profissionais para trocar experiências e dicas.
          </p>
        </div>

        <Link href="/jogos" className="block">
          <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md transition-transform hover:-translate-y-2">
            <i className="fas fa-gamepad text-3xl text-[#071D3B] mb-4"></i>
            <h4 className="font-montserrat text-2xl text-[#071D3B] mb-3">
              Jogos Educativos
            </h4>
            <p className="text-gray-600">
              Jogos que estimulam o desenvolvimento cognitivo das crianças.
            </p>
          </div>
        </Link>

        <Link href="/artigos" className="block">
          <div className="bg-[#F5F5F5] rounded-lg p-5 w-[300px] shadow-md transition-transform hover:-translate-y-2">
            <i className="fas fa-book text-3xl text-[#071D3B] mb-4"></i>
            <h4 className="font-montserrat text-2xl text-[#071D3B] mb-3">
              Artigos
            </h4>
            <p className="text-gray-600">
              Informações e orientações sobre como lidar com deficiências cognitivas.
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
