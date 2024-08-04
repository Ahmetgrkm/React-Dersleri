import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');



  useEffect(() => {
    console.log("her zaman çalışır")
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")
  }, [])


  useEffect(() => {
    console.log("ilk render edildiğinde ve FİRSTNAME state değeri değiştiğinde çalışır ")
  }, [firstName])


  useEffect(() => {
    console.log("ilk render edildiğinde ve LASTNAME değeri değiştiğinde çalışır")
  }, [lastName])


  return (
    <div>
      <div><button onClick={() => setFirstName("ahmed")}>Adı değiştir</button></div>

      <div><button onClick={() => setLastName("ahmed")}>Soyadı değiştir</button></div>

    </div>

  )
}

export default App
