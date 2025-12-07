//Create array of schools
//push each school detail into an object
//submit button to add school - then render the name
//add remove school?
//add edit school?

import { useState } from "react";
import "../styles/Education.css";

export default function Education() {
  const blankEducation = { school: "", course: "", completed: "" };
  const [education, setEducation] = useState(blankEducation);

  const [schools, setSchools] = useState([]);

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

  return (
    <div>
      {schools.length > 0 ? <h3>Education</h3> : null}

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
        <button onClick={()=>handleDeleteClick(sch.id)}>x</button>
        
      </div>
              );
            })
          : null}
      </div>
      <div className="inputs">
        <Input
          type="text"
          label="School"
          placeholder="Enter school name"
          value={education.school}
          onChange={(e)=>handleChange(e, "school")}
        />{" "}
        <Input
          label="Course name"
          placeholder="Enter name of course studied"
          value={education.course}
          onChange={(e)=>handleChange(e, "course")}
        />{" "}
        <Input
          type="date"
          label="Completed"
          placeholder="Enter date of course completion"
          value={education.completed}
          onChange={(e)=>handleChange(e, "completed")}
        />{" "}
        <button onClick={addSchool}>Add School</button>
      
      </div>
    </div>
  );
}

function Input({ label, placeholder, value, onChange, type }) {
  return (
    <div className="details-input-div">
      <label htmlFor={label}>
        {label}
        {": "}

        <input
          type={type}
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
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
