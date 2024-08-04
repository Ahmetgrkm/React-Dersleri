import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const BASE_URL = "http://localhost:3000";

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)


  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    // POST : veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }
  const updateUser = async (userId, updatedUser) => {
    // PUT : veri güncellemek için kullanılır.
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse);
  }


  useEffect(() => {
    // getAllUsers();
    // getUserById(1)

    // const newUser = {
    //   "username": "ahmed",
    //   "password": "3636"
    // }
    // createUser(newUser)

    // updateUser("3", {
    //   "username": "murat",
    //   "password": "5555"
    // })


    deleteUserById("3")
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
