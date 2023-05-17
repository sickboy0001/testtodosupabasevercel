import React, { useEffect, useState } from 'react'
import TodoList from './GuestTodoList';
import { login, reset } from '@/utils/supabaseFunctions';
import {singUp }from '@/utils/supabaseFunctions'


function Login() {
  const [email , setEmail] = useState<any>([])
  const [password, setPassword]= useState("")


//   useEffect(()=>{
//   },[]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let user = await login(email,password);
    console.log(user);
  }

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let user = await singUp(email,password);
    console.log(user);
    }

    const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = await reset(email);
        console.log(user);
        }

  return (
    <section className='text-center mb-2 text-2xl  font-medium'>
        <h3>login</h3>
        {/* <form onSubmit={(e)=> handleSubmit(e)}> */}
        <form onSubmit={(e)=> handleLogin(e)}>
            <input type="text" className='mr-2 shadow-lg p-1 outline-none' onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <input type="text" className='mr-2 shadow-lg p-1 outline-none' onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <button className='shadow-md border-2 px-1 py-1 rounded-lg bg-green-200'>
                login
            </button>
        </form>
        <h3>signup</h3>
        {/* <form onSubmit={(e)=> handleSubmit(e)}> */}
        <form onSubmit={(e)=> handleSignUp(e)}>
            <input type="text" className='mr-2 shadow-lg p-1 outline-none' onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <input type="text" className='mr-2 shadow-lg p-1 outline-none' onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <button className='shadow-md border-2 px-1 py-1 rounded-lg bg-green-200'>
                login
            </button>
        </form>
        <h3>reset</h3>
        <form onSubmit={(e)=> handleReset(e)}>
            <input type="text" className='mr-2 shadow-lg p-1 outline-none' onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <button className='shadow-md border-2 px-1 py-1 rounded-lg bg-green-200'>
                Reset
            </button>
        </form>
        {/* <TodoList todos={todos} setTodos={setTodos}/> */}
    </section>
  )
}

export default Login;