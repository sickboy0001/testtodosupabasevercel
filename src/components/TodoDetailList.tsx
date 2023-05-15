import { Todo } from "@/utils/interface";
import { getAllTodos } from "@/utils/tableTodos";
import React from "react";
const moment = require("moment");

type Props = {
  todos: Todo[];
  userId: string;
  setTodos: React.Dispatch<any>;
};
function TodoDetailList(props: Props) {
  const { todos, userId, setTodos } = props;

  return (
    <div>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">id</th>
            <th className="border border-gray-400 p-2">task</th>
            <th className="border border-gray-400 p-2">is_archived</th>
            <th className="border border-gray-400 p-2">is_completed</th>
            <th className="border border-gray-400 p-2">create_at</th>
            <th className="border border-gray-400 p-2">update_at</th>
            <th className="border border-gray-400 p-2">order</th>
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
                {todo.is_archived ? "true" : ""}
              </td>
              <td className="border border-gray-400 p-2">
                {todo.is_complated ? "true" : ""}
              </td>
              <th className="border border-gray-400 p-2">
                {moment(todo.created_at).format("YYYY/MM/DD hh:mm:ss")}
              </th>
              <th className="border border-gray-400 p-2">
                {moment(todo.updated_at).format("YYYY/MM/DD hh:mm:ss")}
              </th>
              <th className="border border-gray-400 p-2">{todo.order}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoDetailList;
