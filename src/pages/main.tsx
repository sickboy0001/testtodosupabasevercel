import Header from "@/components/views/Header";
import TodoApp from "@/components/views/TodoApp";
import { getUserIdStorage } from "@/utils/LocalStorageUser";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>main</h1>
      <div className="z-10 items-center font-mono text-sm">
        <TodoApp />
      </div>
    </main>
  );
}
