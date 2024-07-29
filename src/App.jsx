import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>login form</h1>
    <Login/>
    </>
  )
}

export default App
