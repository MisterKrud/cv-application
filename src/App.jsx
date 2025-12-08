import { useState } from 'react'

import './App.css'
import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'




function App() {
  const [count, setCount] = useState(0)
  const [activeButtonIndex, setActiveButtonIndex] =useState(1)

  function handleSubmitButton(){
    activeButtonIndex === 1 ? setActiveButtonIndex(0) : setActiveButtonIndex(1);
  }

  return (
    <>
      <div>
      
        <General activeButton={activeButtonIndex===1}/>
        <br />
        <Education activeButton={activeButtonIndex===1}/>
        <br />
        <Experience activeButton={activeButtonIndex===1}/>
       <br />
       <SubmitButtonDiv isActive={activeButtonIndex===1}>
        <div className="submit-button-container">
       <button className="submit-print" onClick={handleSubmitButton}>Submit & Print</button>
       </div>
       </SubmitButtonDiv>
       <SubmitButtonDiv isActive={activeButtonIndex===0}>
        <div className='final-edit'>
       <button className="back-edit" onClick={handleSubmitButton}>↪</button>
       </div> 
       </SubmitButtonDiv>
      </div>
      
    </>
  )
}

function SubmitButtonDiv({isActive, children}){
  return(
    <>
    {isActive ? (
    <div>{children}</div>
    ) :(null)}
      </>
  )
}





export default App
