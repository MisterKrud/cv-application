//Refactor general details so input = final text (like a word document)
//There's no reason to have an input field and the resulting text display seperately on the page


import { useState } from "react";
import '../styles/General.css';

export default function General(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState(' ')

    function handleEmailChange(e) {
       setEmail(e.target.value)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value)
    }
    
    return (
       
        <div className = "general-information">
       
       <div className="inputs">
            <Input label="Name" value={name} name={name} onChange={handleNameChange}/>{' '}
            <Input type = "email" label="Email" name={name} value={email} onChange={handleEmailChange}/>{' '}
            <Input type = "phone" label = "Phone" name={name} value = {phone} onChange={handlePhoneChange} />{' '}
            
            </div>
        </div>
       
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

