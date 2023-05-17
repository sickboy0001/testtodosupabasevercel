import { Todo } from "@/interface/Todos";
import React from "react";
import TableDatetime from "@/components/parts/TableDatetime";
import TableButton from "../parts/TableButton";
const moment = require("moment");

type Props = {
  todos: Todo[];
  userId: string;
  setTodos: React.Dispatch<any>;
};
function TodoDetailList(props: Props) {
  const { todos, userId, setTodos } = props;
  function handleChangeArchived(id: number): void {
    // await archivedChangeTodo(id);
    // let todos = await getAllTodos(userId);
    // setTodos(todos);
    // throw new Error("Function not implemented.");
    console.log(id);
  }

  function handleChangeCompleted(id: number): void {
    // throw new Error("Function not implemented.");
    console.log(id);
  }

  // console.log(todos);

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
                  <TableButton
                    tablecaption={todo.is_completed ? "true" : "false"}
                    tableonclick={handleChangeArchived(todo.id)}
                  />
                </div>
              </td>
              <td className="border border-gray-400 p-2">
                <TableButton
                  tablecaption={todo.is_completed ? "true" : "false"}
                  tableonclick={handleChangeCompleted(todo.id)}
                />
              </td>
              <th className="border border-gray-400 p-2">
                <TableDatetime tabledatetime={todo.created_at} />
              </th>
              <th className="border border-gray-400 p-2">
                <TableDatetime tabledatetime={todo.updated_at} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoDetailList;
