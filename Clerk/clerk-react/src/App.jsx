import { useState } from 'react'
import './App.css'
import Aopp from './Apps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Aopp/>
        </div>
    </>
  )
}

export default App
