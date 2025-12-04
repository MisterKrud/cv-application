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
            <div className = "user-details">
       <div className="name-div"> 
        <h2>Name: </h2> <p>{name}</p></div>
       <div className="name-div"> <h3>Email:{' '} </h3> <p>{' '}{email}</p></div>
      <div className="name-div">  <h3> Phone: </h3> <p>{phone}</p></div>
       </div>
            <Input label="Name" placeholder = "name" value={name} onChange={handleNameChange}/>{' '}
            <Input type = "email" label="email" placeholder="email" value={email} onChange={handleEmailChange}/>{' '}
            <Input type = "phone" label = "phone" placeholder = "phone" value = {phone} onChange={handlePhoneChange} />{' '}
            <button>Submit</button>
        </div>
    )
}

function Input({type, value, onChange, label, placeholder}){
    return (
        <>
        <label>{label}{': '}
    <input type = {type} label={label} value = {value} placeholder = {placeholder} onChange={onChange} />
    </label>
    </>
    )
}

