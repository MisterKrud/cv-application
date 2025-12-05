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
        <>
        <div className = "general-information">
          
       <div className="name-div"> 
        <h2>Name: </h2> <p className="user-name">{name}</p></div>
       <div className="name-div"> <h3>Email:{' '} </h3> <p>{' '}{email}</p></div>
      <div className="name-div">  <h3> Phone: </h3> <p>{phone}</p></div></div>
         <div>
       <div className="inputs">
            <Input label="Name" placeholder = "name" value={name} onChange={handleNameChange}/>{' '}
            <Input type = "email" label="email" placeholder="email" value={email} onChange={handleEmailChange}/>{' '}
            <Input type = "phone" label = "phone" placeholder = "phone" value = {phone} onChange={handlePhoneChange} />{' '}
            <button>Submit</button>
            </div>
        </div>
        </>
    )
}

function Input({type, value, onChange, label, placeholder}){
    return (
        <div className="details-input-div">
        <label>{label}{': '} </label>
    <input type = {type} label={label} value = {value} placeholder = {placeholder} onChange={onChange} />
   
    </div>
    )
}

