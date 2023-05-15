import {supabase} from "../utils/supabase";

export const getAllTodos = async(user_id: any)=>{
    const todos = await supabase.from("todos").select("*")
    .eq("user_id",user_id);
    return todos.data;

}


export const addTodo = async(user_id: any,task:string)=>{
    const id_result = await getTodoMaxId(user_id);

    const { data, error } = await supabase
        .from('todos')
        .insert([
            { user_id: user_id ,task: task,order : id_result+1},
        ])
    return {data,error}
}

const  getTodoMaxId = async(user_id: any)=>{
    try {
        const { data, error } = await supabase
        .from("todos")
        .select("id")
        .order("id",{ ascending: false })
        .limit(1)
        .eq("user_id", user_id);
        if (error) {
          return undefined;
        } else {
            return data[0].id
        }
      } catch (error) {
        return undefined;
      }
}

export const archivedTodo = async(id:number)=>{
    
    const { data, error } = await supabase
        .from('todos')
        .update({ is_archived: true })
        .eq
        ( "id", id )

    return {data,error}
}
