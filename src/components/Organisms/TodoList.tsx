import { archivedTodo, completedTodo, getAllTodos } from "@/bizlogic/todos";
import { Todo } from "@/interface/Todos";
import React from "react";

type Props = {
  todos: Todo[];
  userId: string;
  setTodos: React.Dispatch<any>;
};

function TodoList(props: Props) {
  const { todos, userId, setTodos } = props;

  const handleDelete = async (id: number) => {
    await archivedTodo(id);
    let todos = await getAllTodos(userId);
    setTodos(todos);
  };
  const handleComplete = async (id: number) => {
    await completedTodo(id);
    let todos = await getAllTodos(userId);
    setTodos(todos);
  };

  return (
    <div>
      <ul className="mx-auto">
        {todos?.map((todo) => (
          <div key={todo.id}>
            <div className="flex bg-orange-200 rounded-md mt-2 mb-2 justify-between">
              <li className="font-medium">
                {todo.is_completed ? (
                  <div>
                    <label className="line-through">{todo.task}</label>
                  </div>
                ) : (
                  <div>
                    <span
                      className="cursor-pointer"
                      onClick={() => handleComplete(todo.id)}
                    >
                      ✅
                    </span>
                    {todo.task}
                  </div>
                )}
              </li>
              {todo.is_archived ? (
                <label>deleted</label>
              ) : (
                <div>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleDelete(todo.id)}
                  >
                    ✖
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
