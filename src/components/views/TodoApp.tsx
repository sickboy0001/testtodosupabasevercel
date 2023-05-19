import React, { useEffect, useState } from "react";

// import { addTodo, getAllTodos } from "@/bizlogic/Todos";

import { getUserIdStorage } from "@/utils/LocalStorageUser";
import { addTodo, getAllTodos } from "@/bizlogic/todos";
import TodoList from "../templates/TodoList";
import TodoDetailList from "../templates/TodoDetailList";
import SubTitle from "../parts/SubTitle";

const LOGIN_EMAIL = "local_todo_test_email";

function TodoApp() {
  const [todos, setTodos] = useState<any>([]);
  const [task, setTask] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      if (userId !== "") {
        const todos = await getAllTodos(userId);
        setTodos(todos);
      }
    };
    getTodos();
  }, [userId]);

  useEffect(() => {
    const getUserId = async () => {
      const userid = await getUserIdStorage();
      setUserId(userid);
    };
    getUserId();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task === "") return;
    if (userId === "") return;
    console.log(`${userId} - ${task}`);
    const result = await addTodo(userId, task);
    let todos = await getAllTodos(userId);
    setTodos(todos);
    setTask("");
  };

  return (
    <section className="mb-2 text-2xl  font-medium  ">
      <div className="text-center w-full max-w-xl  mx-auto">
        <h3></h3>
        <SubTitle Title="Todolist" Description="" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="mr-2 shadow-lg p-1 outline-none"
            onChange={(e) => {
              // console.log(e.target.value);
              setTask(e.target.value);
            }}
            value={task}
          />
          <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-200">
            add
          </button>
        </form>
        <TodoList todos={todos} userId={userId} setTodos={setTodos} />
      </div>
    </section>
  );
}

export default TodoApp;
