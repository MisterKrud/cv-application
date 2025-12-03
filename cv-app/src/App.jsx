import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General from './General.jsx'
import Education from './Education.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <General />
        <Education />
       
      </div>
      
    </>
  )
}

export default App
