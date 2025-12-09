//Create array of schools
//push each school detail into an object
//submit button to add school - then render the name
//add remove school?
//add edit school?

import { useState } from "react";


export default function Education({activeButton}) {
  const blankEducation = { school: "", course: "", completed: "" };
  const [education, setEducation] = useState(blankEducation);
  const [schools, setSchools] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)

  function handleChange(e, param) {
    const newEducation = { ...education, [param]: e.target.value };
    setEducation(newEducation);
  }




  function addSchool() {
    const newEducation = { ...education, id: crypto.randomUUID()};
    setSchools([...schools, newEducation]);
    setEducation(blankEducation);
  }

  function handleDeleteClick(id) {
     const newArray = [...schools];
    const itemIndex = newArray.findIndex((item) => item.id === id);
    const itemToEdit = newArray.find((exp, index) => index === itemIndex);
    console.log(itemToEdit);
    newArray.splice(itemIndex, 1);
    setSchools(newArray);
    setEducation(blankEducation);
  }

  function handleEdit(e, id, param){
    const newArray = [...schools];
    const itemIndex = newArray.findIndex((item) => item.id === id);
    const itemToEdit = newArray.find((sch, index) => index === itemIndex);
    console.log(itemToEdit);
    const newItem = { ...itemToEdit, [param]: e.target.value };
    newArray.splice(itemIndex, 1, newItem);
    setSchools(newArray);
  }

  function handleSubmitEditSchools(){
    activeIndex ===1 ? setActiveIndex(0) : setActiveIndex(1)
    console.log(activeIndex)
  }

  return (
    <>
    <Panel className="panel" isActive={activeIndex===0}>
    <div>
     <div className="edit-section-header"><h3>Education</h3></div>

      <div className="education-frame">
        {schools.length > 0
          ? schools.map((sch) => {
              return (
                <div className="inputs" key={sch.id}>
        <Input
          type="text"
          label={'School' + (schools.indexOf(sch)+1)}
          
          value={sch.school}
          onChange={(e)=>handleEdit(e, sch.id, "school")}
        />{" "}
        <Input
          label="Course name"
        
          value={sch.course}
          onChange={(e)=>handleEdit(e, sch.id, "course")}
        />{" "}
        <Input
          type="date"
          label="Completed"
       
          value={sch.completed}
          onChange={(e)=>handleEdit(e, sch.id, "completed")}
        />{" "}
        <div className="delete-button-div">
        <button className="delete-button" onClick={()=>handleDeleteClick(sch.id)}>❌</button>
       </div>
      </div>
              );
            })
          : null}
      </div>
      
      <div className="inputs data">
        
        <Input
          type="text"
          label="School"
        
          value={education.school}
          onChange={(e)=>handleChange(e, "school")}
        />{" "}
        <Input
          label="Course name"
          
          value={education.course}
          onChange={(e)=>handleChange(e, "course")}
        />{" "}
        <Input
          type="date"
          label="Completed"
         
          value={education.completed}
          onChange={(e)=>handleChange(e, "completed")}
        />{" "}
       
       
        <div className = "button-container">
        <button onClick={addSchool}>Add School</button>
        <button className= "submit-button" onClick={handleSubmitEditSchools}>Submit</button>
      </div>
      </div>
    </div>
   
    </Panel>
    <Panel className="panel" isActive={activeIndex===1}>
           <div className="print">
            <div className="cv-header">
            <h3 className="cv-subheader">Education</h3></div>
            {schools.map((sch, index)=> {
              return (
              <div className="info-row" key ={sch.id}>
                
              <div className = "info-cell"><h4>{sch.school}</h4></div>
              <div className = "info-cell"><p>{sch.course}</p></div>
              <div className = "info-cell"><h5>Completed:{' '}</h5><p className = "date">{' '}{sch.completed}</p></div>
            <br/>
              </div>
              )
            })
            }
            <SubmitButtonDiv isActive={activeButton}>
              <button onClick={handleSubmitEditSchools}>Edit</button>
              </SubmitButtonDiv>
           </div>


    </Panel>
    </>
  );
}

function Input({ label, placeholder, value, onChange, type }) {
  return (
    <div className="details-input-div">
      <label htmlFor={label}>
        {label}
        {": "}
 </label>
        <input
          type={type}
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
     
    </div>
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


function EducationInfoFrame({ school, course, completed, onClick, idx }) {
  return (
    <div className="info-row">
      <div className="idx">{idx}</div>
      <div className="info-cell">
        <h4>School: </h4>
        <p>{school}</p>
      </div>
      <div className="info-cell">
        <h5>Course: </h5>
        <p>{course}</p>
      </div>
      <div className="info-cell">
        <h5>Date completed: </h5>
        <p>{completed}</p>
      </div>
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