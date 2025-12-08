//Refactor general details so input = final text (like a word document)
//There's no reason to have an input field and the resulting text display seperately on the page
//Utilise Children in all of this...


import { useState } from "react";
import '../styles/General.css';

export default function General(){

    //refactor this into an object for function simplification
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)

    const userDetails = {name: name, email: email, phone: phone}

    function handleEmailChange(e) {
       setEmail(e.target.value)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value)
    }

    function submitAll(){
       setActiveIndex(1)
    }
    
    return (
       <>
       <Panel isActive={activeIndex===1} onShow={()=>setActiveIndex(1)}>
       <GeneralDetails name={name} email={email} phone={phone} />
         </Panel>

         <Panel isActive={activeIndex===0} onShow={()=>setActiveIndex(0)}>
        {/* <div className = "general-information"> */}
           
       
       <div className="inputs">
            <Input label="Name" value={name} name={name} onChange={handleNameChange} />{' '}
            <Input type = "email" label="Email" name={name} value={email} onChange={handleEmailChange} />{' '}
            <Input type = "phone" label = "Phone" name={name} value = {phone} onChange={handlePhoneChange} />{' '}
            <button onClick={submitAll}>Submit</button>
            </div>
          
        {/* </div> */}
         </Panel>
       </>
    )
}

function Input({type, value, onChange, label, placeholder}){

    return (
        
        <div className="details-input-div">
           
        <label className="general-details-label">{label}{': '} 
    <input className= "general-input" type = {type} label={label} value = {value} placeholder = {placeholder} onChange={onChange} name={label} required/>
   </label>
  
    </div> 
        )
}

function GeneralDetails({name, email, phone}){
    return(
        <>
          
        <div className="general-details">
          
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            
        </div>
      
        </>
    )
}


function Panel({children, isActive}){
    return(
        <div className = "panel">
            {isActive? (
            <div>{children}</div>
            ) :null}
        </div>
    )
}
function SubmitButton(onClick){

    return(
        <button onClick={onClick}>submit</button>
    )
}