import { deleteTodo, getAllTodos } from "@/utils/supabaseFunctions";
import React from "react";

interface GuestTodo {
  id: number;
  title: string;
}

type Props = {
  todos: GuestTodo[];
  setTodos: React.Dispatch<any>;
};
function TodoApp(props: Props) {
  const { todos, setTodos } = props;

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    let todos = await getAllTodos();
    setTodos(todos);
  };
  const lasttodos = todos === undefined ? [] : todos;

  return (
    <div>
      <ul className="mx-auto">
        {lasttodos.map((todo) => (
          <div
            key={todo.id}
            className="flex bg-orange-200 rounded-md mt-2 mb-2 justify-between"
          >
            <li className="font-medium">✅{todo.title}</li>
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              ✖
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
