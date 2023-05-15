import TodoApp from '@/components/GuestTodoApp'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main>
        <Header/>
      <h1>Index</h1>
      <p>Start Page Press Login Button!</p>
        <div className="z-10 w-full max-w-xl items-center font-mono text-sm mx-auto">
          <TodoApp />
      </div>
    </main>
  )
}
