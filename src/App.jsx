import { useState } from 'react'

import './App.css'
import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <General />
        <br />
        <Education />
        <br />
        <Experience />
       
      </div>
      
    </>
  )
}

export default App
