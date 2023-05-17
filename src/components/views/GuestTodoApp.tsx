import React, { useEffect, useState } from "react";
import { addTodo, getAllTodos } from "@/utils/supabaseFunctions";
import GuestTodoList from "../templates/GuestTodoList";

function GuestTodoApp() {
  const [todos, setTodos] = useState<any>([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
      // console.log(todos);
    };
    getTodos();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "") return;
    const result = await addTodo(title);
    let todos = await getAllTodos();
    setTodos(todos);
    // console.log(result)
    setTitle("");
  };

  return (
    <section className="text-center mb-2 text-2xl  font-medium">
      <h3>SupaBase Tod</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="mr-2 shadow-lg p-1 outline-none"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-200">
          add
        </button>
      </form>
      <GuestTodoList todos={todos} setTodos={setTodos} />
    </section>
  );
}

export default GuestTodoApp;
