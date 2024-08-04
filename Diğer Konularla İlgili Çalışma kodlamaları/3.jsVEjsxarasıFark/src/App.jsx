import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Hello />

    </div>

  )
}

export default App

/*hello dosyasının uzantısını js yapınca alınan hataya bak.
ikisi arasındaki farkı şu şekilde gösterebiliriz
JSX yazarsak eğer:
const App=()=>{
  return <div>hello</div>
  }
JS uzantılı yazarsak:
const App=()=>{
  return React.createElement("div","hello")
