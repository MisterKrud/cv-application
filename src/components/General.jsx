import { useState } from "react";
// import "../styles/General.css";


export default function General({activeButton}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
 
 

  

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleEditSubmit() {
    activeIndex === 1 ? setActiveIndex(0) : setActiveIndex(1);
  }

  return (
    <>
      <Panel isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        <div className = "print">
        <GeneralDetails name={name} email={email} phone={phone} />
        <SubmitButtonDiv isActive={activeButton}>
        <button onClick={handleEditSubmit}>Edit</button>
        </SubmitButtonDiv>
        </div>
      </Panel>

      <Panel isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        <div className="general-data inputs">
          <Input
            label="Name"
            value={name}
            name={name}
            onChange={handleNameChange}
          />{" "}
          <Input
            type="email"
            label="Email"
            name={name}
            value={email}
            onChange={handleEmailChange}
          />{" "}
          <Input
            type="phone"
            label="Phone"
            name={name}
            value={phone}
            onChange={handlePhoneChange}
          />{" "}
          <button onClick={handleEditSubmit}>Submit</button>
        </div>
      </Panel>
    </>
  );
}

function Input({ type, value, onChange, label, placeholder }) {
  return (
    <div className="details-input-div">
      <label className="general-details-label">
        {label}
        {": "}
        </label>
        <input
          className="general-input"
          type={type}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={label}
          required
        />
      
    </div>
  );
}

function GeneralDetails({ name, email, phone }) {
  return (
    <>
      <div className="general-details">
        <div className="document-header">
          <h1>{name}</h1>
          <p>
            <em>Curriculum Vitae</em>
          </p>
        </div>
        <div className="contact-details">
          <h4 className="email">{email}</h4>
          <h4 className="phone">{phone}</h4>
        </div>
      </div>
    </>
  );
}

function Panel({ children, isActive }) {
  return <div className="panel">{isActive ? <div>{children}</div> : null}</div>;
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