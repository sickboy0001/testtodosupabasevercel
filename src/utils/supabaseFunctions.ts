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
export const login = async(email:string,password:string) =>{
    const result = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    console.log(result);
    return result
      
}
export const singUp = async(email:string,password:string)=>{
    const result = await supabase.auth.signUp({
        email: email,
        password: password,
      });
    return result
}

export const reset = async(email:string)=>{
    const result = await supabase.auth.resetPasswordForEmail(
         email
      );
    return result
}
