//Create array of schools
//push each school detail into an object
//submit button to add school - then render the name
//add remove school?

import { useState } from "react";
import  '../styles/Education.css';



export default function Education() {
    const [education, setEducation] = useState({school: '', course:'', completed: ''})
    const [schoolNumber, setSchoolNumber] = useState(1)
    const [schools, setSchools] =useState([])

    const [school, setSchool] = useState('')
    const [course, setCourse] = useState('')
    const [completed, setCompleted] = useState('')

    const containerStyle = {
        display: 'flex',
        backgroundColor: 'lightgreen'
    };
    

    function handleSchoolNameChange(e){
        const newEducation = {...education, school: (e.target.value)}
        setEducation(newEducation)
        // setSchool(e.target.value)
    }

    function handleCourseChange(e){
        const newEducation = {...education, course: e.target.value}
        setEducation(newEducation)
        // setCourse(e.target.value)
    }

    function handleCompletedChange(e){
        const newEducation = {...education, completed: e.target.value}
            setEducation(newEducation)
        // setCompleted(e.target.value)
        
    }

    function addSchool(){
        setSchools([...schools, education])

    }

  
    
   
        return(
            <>
            {schools.length>0 ? <h3>Education</h3> : null }
            {schools.map(sch => {
                return (
                    <div style={containerStyle}>
                        <EducationInfoFrame style={containerStyle} className="education-frame" school = {sch.school} course = {sch.course} completed={sch.completed} />
                    </div>
                )
            })}
                      
            <Input type= "text" label="School" placeholder="Enter school name" value={education.school} onChange={handleSchoolNameChange} />{' '}
            <Input label="Course name" placeholder = "Enter name of course studied" value = {education.course} onChange={handleCourseChange} />{' '}
            <Input type="date" label="Completed" placeholder = "Enter date of course completion" value = {education.completed} onChange={handleCompletedChange} />{' '}
            <button onClick={(addSchool)}>Add School</button>
            <div>Schools: {schools.map(s =>(
                <p key={s.school}>{s.school}</p>
            ))}</div>
            </>
        )


}



function Input({label, placeholder, value, onChange, type}){
    return (
    <>
        <label>{label}</label>
    
            <input type ={type} placeholder={placeholder} value={value} onChange={onChange} />
       </>
    )
}
function EducationInfoFrame({school, course, completed}){
   
    return (
        <>
          
            
            <h4>School: {school}</h4>
            <h5>Course: {course}</h5>
            <h5>Date completed: {completed}</h5>
        </>
    )
}

