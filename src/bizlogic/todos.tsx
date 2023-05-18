import {
  insertTodo,
  selectAllTodos,
  updateTodoArchived,
  updateTodoCompleted,
  updateTodoToArchived,
  updateTodoToCompleted,
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

export const toCompletedTodo = async (user_id: any, toCompleted: boolean) => {
  return updateTodoToCompleted(user_id, toCompleted);
};

export const toArchivedTodo = async (user_id: any, toArchived: boolean) => {
  return updateTodoToArchived(user_id, toArchived);
};
