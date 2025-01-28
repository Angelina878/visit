import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Site from './components/site/Site'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Site />
    </>

  )
}

export default App
