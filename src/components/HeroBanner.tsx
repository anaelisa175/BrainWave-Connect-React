import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="relative h-[500px]">
      {/* Carrossel */}
      <div className="relative w-full h-full overflow-hidden">
        <div className="flex w-[300%] h-full transition-transform duration-500">
          <Image
            src="/imagens/imagem1_carrossel.jpg"
            alt="Imagem 1"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Image
            src="/imagens/imagem2_carrossel.jpg"
            alt="Imagem 2"
            layout="fill"
            objectFit="cover"
          />
          <Image
            src="/imagens/imagem3_carrossel.jpg"
            alt="Imagem 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-[#071D3B] bg-opacity-50 z-[1]"></div>

      {/* Texto do banner */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-[2] max-w-4xl px-4">
        <h2 className="font-montserrat text-xl mb-5">
          Transformando a Inclusão e o Apoio à Neurodiversidade
        </h2>
        <p className="text-lg mb-8">
          Nosso compromisso é transformar a vida de pessoas neurodivergentes e suas famílias, 
          proporcionando suporte especializado para aqueles com TEA, TDAH, autismo e outras condições.
        </p>
        <a 
          href="#" 
          className="bg-[#F6B600] text-[#071D3B] px-6 py-3 rounded hover:bg-[#e0a500] transition-colors inline-block"
        >
          Saiba Mais
        </a>
      </div>
    </section>
  )
}
