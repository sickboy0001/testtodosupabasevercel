import GuestTodoApp from "@/components/views/GuestTodoApp";
import Header from "@/components/views/Header";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <Header />
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
        ポップアップを表示
      </button>
      <h1>sample</h1>
      <p>To Guest Page </p>

      <div className="z-10 w-full max-w-xl items-center font-mono text-sm mx-auto">
        <GuestTodoApp />
      </div>
    </main>
  );
}
