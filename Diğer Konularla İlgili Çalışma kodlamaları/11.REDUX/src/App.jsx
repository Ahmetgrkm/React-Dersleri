import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { store } from './redux/store'
import UserList from './UserList';


function App() {

  const { value } = useSelector((store) => store.counter);
  console.log(value)



  return (
    <div>
      <UserList />
    </div>
  )
}

export default App
