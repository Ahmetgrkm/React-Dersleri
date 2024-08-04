import { useState } from 'react'

import './App.css'
import useCounter from './hooks/useCounter'

function App() {

  const { count, increase, decrease } = useCounter();

  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Arttır</button>
      <button onClick={decrease}>Arttır</button>

    </div>
  )
}

export default App
