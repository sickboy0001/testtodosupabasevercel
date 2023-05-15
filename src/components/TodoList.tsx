import { Todo } from '@/utils/interface';
import { archivedTodo, getAllTodos } from '@/utils/tableTodos';
import React from 'react'

type Props={
  todos:Todo[],
  userId:string,
  setTodos:React.Dispatch<any>,
}
function TodoList(props:Props) {
  const {todos,userId,setTodos} =props;

  const handleDelete=async(id:number)=>{
    await archivedTodo(id)
    let todos = await getAllTodos(userId);
    setTodos(todos);
  };

  return (
    <div>
      <ul className='mx-auto'>
        {todos?.map((todo) => (
                  <div key={todo.id} className='flex bg-orange-200 rounded-md mt-2 mb-2 justify-between'>
                  <li className='font-medium'>✅{todo.task}</li>
                  <span className='cursor-pointer' onClick={()=>handleDelete(todo.id)}>✖</span>
                </div>
          )
        )
        }

      </ul>
    </div>
  )
}

export default TodoList;