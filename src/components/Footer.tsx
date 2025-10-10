import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#071D3B] text-white py-5 px-4 text-center">
      <p className="mb-3">
        &copy; 2025 BrainWave Connect. Todos os direitos reservados.
      </p>
      <div>
        <Link href="/privacidade" className="text-white hover:text-[#F6B600] transition-colors mx-3">
          Política de Privacidade
        </Link>
        <Link href="/termos" className="text-white hover:text-[#F6B600] transition-colors mx-3">
          Termos de Uso
        </Link>
      </div>
    </footer>
  )
}
