//Create array of schools
//push each school detail into an object
//submit button to add school - then render the name
//add remove school?
//add edit school?

//submit - hide inputs, add p element with value, add edit & delete button

import { useState } from "react";
import "../styles/Experience.css";

export default function Experience({activeButton}) {
  const blankExperience = {
    workplace: "",
    position: "",
    responsibilities: [],
    from: "",
    to: "",
  };

  const [experience, setExperience] = useState(blankExperience);
  const [experienceArray, setExperienceArray] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)


  function handleChange(e, param) {
    const newExperience = { ...experience, [param]: e.target.value };
    setExperience(newExperience);
  }




  function addExperience() {
    const newExperience = { ...experience, id: crypto.randomUUID() };
    setExperienceArray([...experienceArray, newExperience]);
    setExperience(blankExperience);
  }

  function handleDeleteClick(id) {
    const newArray = [...experienceArray];
    const itemIndex = newArray.findIndex((item) => item.id === id);
    const itemToEdit = newArray.find((exp, index) => index === itemIndex);
    console.log(itemToEdit);
    newArray.splice(itemIndex, 1);
    setExperienceArray(newArray);
    setExperience(blankExperience);
  }



  function handleEdit(e, id, param) {
    const newArray = [...experienceArray];
    const itemIndex = newArray.findIndex((item) => item.id === id);
    const itemToEdit = newArray.find((exp, index) => index === itemIndex);
    console.log(itemToEdit);
    const newItem = { ...itemToEdit, [param]: e.target.value };
    newArray.splice(itemIndex, 1, newItem);
    setExperienceArray(newArray);
  }

  function handleSubmitEditExperience(){
    activeIndex === 1 ? setActiveIndex(0) : setActiveIndex(1)
  }




  return (
    <>
    <Panel isActive={activeIndex===0}>
    <div>
      {experienceArray.length > 0 ? <h3>Experience</h3> : null}

    
      <div className="experience-frame">
        {experienceArray.length > 0
          ? experienceArray.map((exp) => {
              return (
                <div className="inputs" key={exp.id}>
                  <Input
                    name={"Workplace" + (experienceArray.indexOf(exp) + 1)}
                    type="text"
                    label={
                      "Workplace" + " " + (experienceArray.indexOf(exp) + 1)
                    }
                    value={exp.workplace}
                    key={exp.id}
                    onChange={(e) => handleEdit(e, exp.id, "workplace")}
                  />{" "}
                  <Input
                    name="position"
                    label="Position title"
                    value={exp.position}
                    onChange={(e) => handleEdit(e, exp.id, "position")}
                  />{" "}
                  <Input
                    label="Responsibilities"
                    value={exp.responsibilities}
                    onChange={(e) => handleEdit(e, exp.id, "responsibilities")}
                  />{" "}
                  <Input
                    label="Start date"
                    type="month"
                    value={exp.from}
                    onChange={(e) => handleEdit(e, exp.id, "from")}
                  />{" "}
                  <Input
                    label="End date"
                     type="month"
                    value={exp.to}
                    onChange={(e) => handleEdit(e, exp.id, "to")}
                  />{" "}
                  <button className = "delete-button" onClick={() => handleDeleteClick(exp.id)}>❌</button>
                </div>
              );
            })
          : null}
      </div>
      
      <div>
        <div className="inputs">
          <Input
            name="workplace"
            type="text"
            label="Company name"
            placeholder="Enter company"
            value={experience.workplace}
            onChange={(e)=>handleChange(e, "workplace")}
          />{" "}
          <Input
            name="position"
            label="Position title"
            value={experience.position}
            onChange={(e)=>handleChange(e, "position")}
          />{" "}
          <Input
            label="Responsibilities"
            placeholder="Enter responsibilities of your role"
            value={experience.responsibilities}
            onChange={(e)=>handleChange(e, "responsibilities")}
          />{" "}
          <Input
            name="start-date"
            type="month"
            label="From"
            value={experience.from}
            onChange={(e)=>handleChange(e, "from")}
          />
          <Input
            name="end-date"
            type="month"
            label="To"
            value={experience.to}
            onChange={(e)=>handleChange(e, "to")}
          />
          <button onClick={addExperience}>Add Experience</button>
           <button onClick={handleSubmitEditExperience}>Submit</button>
        </div>
      </div>
      
      <div className="inputs"></div>
    </div>
    </Panel>
     <Panel className="panel" isActive={activeIndex===1}>
           <div>
            <div className="cv-header">
            <h3 className="cv-subheader">Experience</h3></div>
            {experienceArray.map((exp, index)=> {
              return (
              <div className="info-row" key ={exp.id}>
                
              <div className = "info-cell"><h4>{exp.workplace}</h4></div>
              <div className = "info-cell"><p className="position">{exp.position}</p></div>
              <div className = "info-cell"><p className="responsibilities">{exp.responsibilities}</p></div>
              <div className = "info-cell"><h5>From:{' '}</h5><p>{' '}{exp.from}</p></div>
              <div className = "info-cell"><h5>To:{' '}</h5><p>{' '}{exp.to}</p></div>
            
              </div>
              )
            })
            }
            <SubmitButtonDiv isActive = {activeButton}>
              <button onClick={handleSubmitEditExperience}>Edit</button>
              </SubmitButtonDiv>
           </div>


    </Panel>
    </>
  );
}

function Input({ label, placeholder, value, onChange, objKey, type, idx }) {
  return (
    <>
      <div className="details-input-div" key={idx}>
        <label htmlFor={name}>
          {label}
          {": "}

          <input
            key={idx}
            type={type}
            name={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    </>
  );
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

function ExperienceFrame({
  workplace,
  position,
  responsibilities,
  onClick,
  onClick2,
  idx,
}) {
  return (
    <div className="info-row">
      <div className="idx">{idx}</div>
      <div className="info-cell company-name">
        <h4>Company Name: </h4>
        <p>{workplace}</p>
      </div>
      <div className="info-cell job-title">
        <h5>Job title: </h5>
        <p>{position}</p>
      </div>
      <div className="info-cell responsibilities">
        <h5>Responsibilities: </h5>
        <p>{responsibilities}</p>
      </div>
      <button className="delete-button" onClick={onClick2}>
        📝
      </button>
      <button className="delete-button" onClick={onClick}>
        ❌
      </button>
    </div>
  );
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