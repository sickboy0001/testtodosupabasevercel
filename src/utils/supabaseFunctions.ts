import {supabase} from "../utils/supabase";

export const getAllTodos = async()=>{
    const todos = await supabase.from("testtodo").select("*")
    return todos.data;

}


export const addTodo = async(title:string)=>{
    const { data, error } = await supabase
        .from('testtodo')
        .insert([
        { title: title },
        ])
    return {data,error}

  
}

export const deleteTodo = async(id:number)=>{
    const { data, error } = await supabase
        .from('testtodo')
        .delete()
        .eq
        ( "id", id )
    return {data,error}

  
}

