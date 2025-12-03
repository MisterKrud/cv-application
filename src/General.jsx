import { useState } from "react";

export default function General(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
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
        <h2>{name}</h2>
            <Input label="Name" placeholder = "name" value={name} onChange={handleNameChange}/>{' '}
            <Input type = "email" label="email" placeholder="email" value={email} onChange={handleEmailChange}/>{' '}
            <Input type = "phone" label = "phone" placeholder = "phone" value = {phone} onChange={handlePhoneChange} />{' '}
            <button>Submit</button>
        </>
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

