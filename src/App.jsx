import { useState } from 'react'

import './App.css'
import General from './General.jsx'
import Education from './Education.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <General />
        <br />
        <Education />
       
      </div>
      
    </>
  )
}

export default App
