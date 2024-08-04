import { useState } from 'react'

import './App.css'

function App() {

  // string tckn="1234567899"
  //string firstname="enes" 

  //useState:hooks ==> verileri tutmamızı sağlar.
  //Bir state'in değerini set methodu kullanarak değiştirdiğimizde component yeniden render edilir

  // const [firstName, setFirstname] = useState('ahmet');
  // const [lastName, setLastname] = useState('çalışkan');
  //  -------------------------------------------------------
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    setCount(count - 1)
  }
  return (

    <div>
      {/* {firstName} {lastName} */}

      {/* ------------------------------------------------*/}

      {/* <div>{firstName}</div>

      <div><button onClick={() => { setFirstname("Ece") }}>ismi değiştir</button></div> */}

      {/* ----------------------------------------------- */}

      <div>
        <div> {count}</div>
        <div><button onClick={arttir}>arttır</button></div>
        <div><button onClick={azalt}>azalt</button></div>

      </div>



    </div>


  )
}

export default App
