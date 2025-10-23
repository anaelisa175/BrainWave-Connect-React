'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Email ou senha inválidos')
      } else {
        router.push('/')
      }
    } catch (error) {
      setError('Ocorreu um erro ao fazer login')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="w-full">
          <h1 className="text-3xl text-center mb-6">Login</h1>
          
          <div className="text-center mb-4">
            <span className="text-gray-600">Não tem uma conta? </span>
            <Link href="/cadastro" className="text-yellow-500 hover:underline">
              Cadastre-se agora
            </Link>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Lembrar de mim
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-500 text-white py-3 px-4 rounded hover:bg-yellow-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Ou continue com
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="mt-6 w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              Google
            </button>
          </div>

          <div className="mt-8 text-center">
            <Link href="/esqueci-senha" className="text-sm text-gray-600 hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            © 2025 BrainWave Connect. Todos os direitos reservados.
          </div>
          
          <div className="mt-2 text-center">
            <Link href="/termos" className="text-xs text-gray-600 hover:underline">
              Termos de serviço
            </Link>
            {' | '}
            <Link href="/privacidade" className="text-xs text-gray-600 hover:underline">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
