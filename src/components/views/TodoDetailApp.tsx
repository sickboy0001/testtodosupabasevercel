import React, { useEffect, useState } from "react";

// import { addTodo, getAllTodos } from "@/bizlogic/Todos";

import { getUserIdStorage } from "@/utils/LocalStorageUser";
import { addTodo, getAllTodos } from "@/bizlogic/todos";
import TodoList from "../templates/TodoList";
import TodoDetailList from "../templates/TodoDetailList";
import SubTitle from "../parts/SubTitle";

const LOGIN_EMAIL = "local_todo_test_email";

function TodoDetailApp() {
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

  return (
    <section className="mb-2 text-2xl  font-medium  ">
      <div className="text-center w-full max-w-5xl  mx-auto">
        <SubTitle Title="Todolist-Detail" Description="" />
        <div className="flex justify-center">
          <TodoDetailList todos={todos} userId={userId} setTodos={setTodos} />
        </div>
      </div>
    </section>
  );
}

export default TodoDetailApp;
