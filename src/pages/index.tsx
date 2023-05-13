import Image from 'next/image'
import { Inter } from 'next/font/google'
import TodoApp from '@/components/TodoApp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <section className='flex justify-center items-center h-screen'>
            <TodoApp />
          </section>
      </div>
    </main>
  )
}
