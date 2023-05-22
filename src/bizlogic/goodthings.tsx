import {
  insertGoodThing,
  selectAllGoodThings,
  updateGoodThingArchived,
} from "@/tables/GoodThings";

export const getAllGoodThings = async (user_id: any) => {
  return selectAllGoodThings(user_id);
};

export const addGoodThing = async (
  userId: any,
  targetDate: Date,
  goodThing: string
) => {
  console.log(
    `addGoodThing userId:${userId}  targetDate:${targetDate} goodThing:${goodThing}`
  );
  return insertGoodThing(userId, targetDate, goodThing);
};

export const archivedGoodThing = async (id: any) => {
  return updateGoodThingArchived(id);
};

// export const completedTodo = async (user_id: any) => {
//   return updateTodoCompleted(user_id);
// };

// export const toCompletedTodo = async (user_id: any, toCompleted: boolean) => {
//   return updateTodoToCompleted(user_id, toCompleted);
// };

// export const toArchivedTodo = async (user_id: any, toArchived: boolean) => {
//   return updateTodoToArchived(user_id, toArchived);
// };
