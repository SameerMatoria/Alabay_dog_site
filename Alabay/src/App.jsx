import { useState } from 'react'
import Bg from './Bg'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bg/>
      <Home />
    </>
  )
}

export default App
