import React, { useEffect, useState } from "react";

// import { addTodo, getAllTodos } from "@/bizlogic/Todos";

import { getUserIdStorage } from "@/utils/LocalStorageUser";
import { getAllTodos } from "@/bizlogic/todos";
import SubTitle from "../parts/SubTitle";
import TodoOrder from "../templates/TodoOrder";

const LOGIN_EMAIL = "local_todo_test_email";

function TodoOrderApp() {
  const [todos, setTodos] = useState<any>([]);
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
      <div className="text-center w-full max-w-xl  mx-auto">
        <SubTitle Title="Todolist-Order" Description="" />
        <div className="flex justify-center">
          <TodoOrder todos={todos} userId={userId} setTodos={setTodos} />
        </div>
      </div>
    </section>
  );
}

export default TodoOrderApp;
