//Refactor general details so input = final text (like a word document)
//There's no reason to have an input field and the resulting text display seperately on the page
//Utilise Children in all of this...


import { useState } from "react";
import '../styles/General.css';

export default function General(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState(' ')
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
       <GeneralDetails name={name} email={email} phone={phone} isActive={activeIndex===1} onShow={()=>setActiveIndex(1)}/>
        <div className = "general-information">
       
       <div className="inputs">
            <Input label="Name" value={name} name={name} onChange={handleNameChange} isActive={activeIndex===0} onShow={()=>setActiveIndex(0)}/>{' '}
            <Input type = "email" label="Email" name={name} value={email} onChange={handleEmailChange} isActive={activeIndex===0} onShow={()=>setActiveIndex(0)}/>{' '}
            <Input type = "phone" label = "Phone" name={name} value = {phone} onChange={handlePhoneChange} isActive={activeIndex===0} onShow={()=>setActiveIndex(0)} />{' '}
            <button onClick={submitAll}>Submit</button>
            </div>
          
        </div>
       </>
    )
}

function Input({type, value, onChange, label, placeholder, isActive}){

    return (
        
        <div className="details-input-div">
            {isActive ? (
        <label className="general-details-label">{label}{': '} 
    <input className= "general-input" type = {type} label={label} value = {value} placeholder = {placeholder} onChange={onChange} name={label} required/>
   </label>
   ) :( null)}
    </div> 
        )
}

function GeneralDetails({name, email, phone, isActive, onShow}){
    return(
        <>
          {isActive ? (
        <div className="general-details">
          
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            
        </div>
        ) : (null)}
        </>
    )
}

function SubmitButton(onClick){

    return(
        <button onClick={onClick}>submit</button>
    )
}