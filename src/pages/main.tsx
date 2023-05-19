import Header from "@/components/views/Header";
import TodoApp from "@/components/views/TodoApp";
import TodoDetailApp from "@/components/views/TodoDetailApp";
import TodoOrderApp from "@/components/views/TodoOrderApp";
import { getUserIdStorage } from "@/utils/LocalStorageUser";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>main</h1>
      <div className="z-10 items-center font-mono text-sm">
        <TodoApp />
      </div>
      <div className="z-10 items-center font-mono text-sm">
        <TodoDetailApp />
      </div>
      <div className="z-10 my-4 items-center font-mono text-sm">
        <TodoOrderApp />
      </div>
    </main>
  );
}
