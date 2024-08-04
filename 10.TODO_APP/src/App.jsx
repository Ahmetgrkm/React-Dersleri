import { useState } from 'react'
import './App.css'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'


function App() {
  const [todos, setTodos] = useState([]);



  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);

  }

  const uptadeTodo = (newTodo) => {
    todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...uptadeTodo]);
  }


  console.log(todos)




  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUptadeTodo={uptadeTodo} />
      </div>


    </div>
  )
}

export default App
