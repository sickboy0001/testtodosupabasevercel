import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import { addTodo, getAllTodos } from '@/utils/tableTodos';
import { getUserStorage , getUserIdStorage } from '@/utils/LocalStorageUser';

const LOGIN_EMAIL='local_todo_test_email'

function TodoApp() {
  const [todos , setTodos] = useState<any>([])
  const [title, setTitle]= useState("")
  const [userId, setUserId] = useState("");


  useEffect(()=>{
    const getTodos= async ()=>{
      const todos = await getAllTodos(userId);
      setTodos(todos);
    }
    getTodos();
  },[]);

  useEffect(() => {
    // const thisuserId = getUserIdStorage()
    const getUserId= async ()=>{
        const userid = await getUserIdStorage() 
        setUserId(userid);
    }
    getUserId()
  }, []);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(title==="") return ;
    if(userId==="") return ;
    console.log(`${userId} - ${title}`)
    const result =await addTodo(userId,title)
    let todos = await getAllTodos(userId);
    setTodos(todos);
    setTitle("");

  }

  return (
    <section className='text-center mb-2 text-2xl  font-medium'>
        <h3>SupaBase Tod</h3>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input type="text" className='mr-2 shadow-lg p-1 outline-none' onChange={(e)=> setTitle(e.target.value)} value={title}/>
            <button className='shadow-md border-2 px-1 py-1 rounded-lg bg-green-200'>
                add
            </button>
        </form>
        <TodoList todos={todos} userId={userId} setTodos={setTodos}/>
    </section>
  )
}

export default TodoApp;