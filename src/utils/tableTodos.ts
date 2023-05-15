import {supabase} from "../utils/supabase";

export const getAllTodos = async(user_id: any)=>{
    const todos = await supabase.from("todos").select("*")
    .eq("user_id",user_id);
    return todos.data;

}


export const addTodo = async(user_id: any,task:string)=>{
    const { data, error } = await supabase
        .from('todos')
        .insert([
            { user_id: user_id },
            { task: task },
        ])
    return {data,error}
}

export const deleteTodo = async(id:number)=>{
    const { data, error } = await supabase
        .from('todos')
        .delete()
        .eq
        ( "id", id )
    return {data,error}
}
