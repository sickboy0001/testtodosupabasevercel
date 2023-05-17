import {supabase} from "../utils/supabase";

export const selectAllTodos = async(user_id: any)=>{
    const todos = await supabase.from("todos").select("*")
    .eq("user_id",user_id);
    return todos.data;

}


export const insertTodo = async(user_id: any,task:string)=>{
    const { data, error } = await supabase
        .from('todos')
        .insert([
            { user_id: user_id ,task: task},
        ])
    return {data,error}
}


export const updateTodoArchived = async(id:number)=>{
    console.log(`updateTOdoArch:${id}`)
    const { data, error } = await supabase
        .from('todos')
        .update(
            { is_archived: true, updated_at: new Date()}
            )
        .eq
        ( "id", id )

    return {data,error}
}

export const updateTodoCompleted = async(id:number)=>{
    console.log(`updateTodoCompleted:${id}`)
    const { data, error } = await supabase
        .from('todos')
        .update(
            { is_completed: true, updated_at: new Date()}
            )
        .eq
        ( "id", id )

    return {data,error}
}
