//Create array of schools
//push each school detail into an object
//submit button to add school - then render the name
//add remove school?
//add edit school?

import { useState } from "react";
import  '../styles/Education.css';



export default function Education() {
    const blankEducation = {school: '', course:'', completed: ''}
    const [schoolId, setSchoolId] = useState(0)
    const [education, setEducation] = useState(blankEducation)
    
    const [schools, setSchools] =useState([])

  
    

    function handleSchoolNameChange(e){
        const newEducation = {...education, school: (e.target.value)}
        setEducation(newEducation)
    }

    function handleCourseChange(e){
        const newEducation = {...education, course: e.target.value}
        setEducation(newEducation)    
    }

    function handleCompletedChange(e){
        const newEducation = {...education, completed: e.target.value}
            setEducation(newEducation)      
    }



    function addSchool(){
        setSchoolId(schoolId+1)
       const newEducation = {...education, id:schoolId }
        setSchools([...schools, newEducation])
        setEducation(blankEducation)

    }

  
    
   
        return(
            <div>
            {schools.length>0 ? <h3>Education</h3> : null }
            {schools.map(sch => {
                return (
                    <div className="education-frame">
                        <EducationInfoFrame  school = {sch.school} course = {sch.course} completed={sch.completed} />
                    </div>
                )
            })}
             <div className = "inputs">        
            <Input type= "text" label="School" placeholder="Enter school name" value={education.school} onChange={handleSchoolNameChange} />{' '}
            <Input label="Course name" placeholder = "Enter name of course studied" value = {education.course} onChange={handleCourseChange} />{' '}
            <Input type="date" label="Completed" placeholder = "Enter date of course completion" value = {education.completed} onChange={handleCompletedChange} />{' '}
            <button onClick={(addSchool)}>Add School</button>
             {/* <div>Schools: {schools.map(s =>(
                <p key={s.school}>{s.school} {s.id}</p>
            ))}</div>  */}</div> 
            </div>
        )


}



function Input({label, placeholder, value, onChange, type}){
    return (
    <div className="details-input-div">
        <label>{label}{': '}</label>
    
            <input type ={type} placeholder={placeholder} value={value} onChange={onChange}  />
       </div>
    )
}
function EducationInfoFrame({school, course, completed}){
   
    return (
        <>
          
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
        </>
    )
}

