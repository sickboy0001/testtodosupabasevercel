import { Todo } from "@/interface/Todos";
import React from "react";
import Datetime from "@/components/Atoms/Datetime";
import ButtonBoolean from "../Atoms/ButtonBoolean";
import {
  completedTodo,
  getAllTodos,
  toArchivedTodo,
  toCompletedTodo,
} from "@/bizlogic/todos";

const moment = require("moment");

type Props = {
  todos: Todo[];
  userId: string;
  setTodos: React.Dispatch<any>;
};
function TodoDetailList(props: Props) {
  const { todos, userId, setTodos } = props;

  const handleClickChangeArchived = async (
    id: number,
    isToArchived: boolean
  ) => {
    {
      console.log(`handleClickChangeArchived:id:${id} `);
      await toArchivedTodo(id, isToArchived);
      let todos = await getAllTodos(userId);
      setTodos(todos);
    }
  };

  const handleClickChangeCompleted = async (
    id: number,
    isToCompleted: boolean
  ) => {
    {
      console.log(`id:${id} `);
      await toCompletedTodo(id, isToCompleted);
      let todos = await getAllTodos(userId);
      setTodos(todos);
    }
  };

  // console.log(todos);
  const arg = 1;

  return (
    <div>
      <table className="border-collapse border border-gray-400 text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">id</th>
            <th className="border border-gray-400 p-2">task</th>
            <th className="border border-gray-400 p-2">is_archived</th>
            <th className="border border-gray-400 p-2">is_completed</th>
            <th className="border border-gray-400 p-2">create_at</th>
            <th className="border border-gray-400 p-2">update_at</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <tr key={todo.id}>
              <td className="border border-gray-400 p-2">{todo.id}</td>
              <td className="border border-gray-400 p-2 text-left">
                {todo.task}
              </td>
              <td className="border border-gray-400 p-2">
                <div>
                  <ButtonBoolean
                    handleClick={() =>
                      handleClickChangeArchived(
                        todo.id,
                        !todo.is_archived ? true : false
                      )
                    }
                  >
                    {todo.is_archived ? "true" : "false"}
                  </ButtonBoolean>
                </div>
              </td>
              <td className="border border-gray-400 p-2">
                <ButtonBoolean
                  handleClick={() =>
                    handleClickChangeCompleted(
                      todo.id,
                      !todo.is_completed ? true : false
                    )
                  }
                >
                  {todo.is_completed ? "true" : "false"}
                </ButtonBoolean>
              </td>
              <th className="border border-gray-400 p-2">
                <Datetime tabledatetime={todo.created_at} />
              </th>
              <th className="border border-gray-400 p-2">
                <Datetime tabledatetime={todo.updated_at} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoDetailList;
