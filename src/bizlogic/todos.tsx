import {
  insertTodo,
  selectAllTodos,
  updateTodoArchived,
  updateTodoCompleted,
} from "@/tables/Todos";

export const getAllTodos = async (user_id: any) => {
  return selectAllTodos(user_id);
};

export const addTodo = async (user_id: any, task: string) => {
  console.log(user_id);
  console.log(task);
  return insertTodo(user_id, task);
};

export const archivedTodo = async (user_id: any) => {
  return updateTodoArchived(user_id);
};

export const completedTodo = async (user_id: any) => {
  return updateTodoCompleted(user_id);
};
