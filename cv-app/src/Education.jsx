//Create array of schools
//push each school detail into an object
//submit button to add school - then render the name
//add remove school?

import { useState } from "react";

const initialSchools = []

export default function Education() {
    const [education, setEducation] = useState({id: 0, school: '', course: '', completed: ''})
    const [schoolNumber, setSchoolNumber] = useState(1)
    // const [schools, setSchools] =useState(initialSchools)

    const [school, setSchool] = useState('')
    const [course, setCourse] = useState('')
    const [completed, setCompleted] = useState('')
    

    function handleSchoolNameChange(e){
        const newEducation1 = {...education, school: (e.target.value)}
        setEducation(newEducation1)
        // setSchool(e.target.value)
    }

    function handleCourseChange(e){
        const newEducation2 = {...education, course: e.target.value}
        setEducation(newEducation2)
        // setCourse(e.target.value)
    }

    function handleCompletedChange(e){
        const newEducation3 = {...education, completed: e.target.value}
            setEducation(newEducation3)
        // setCompleted(e.target.value)
        
    }

  
    
   
        return(
            <>
            <h3>Education</h3>
            
            <h4>School: {education.school}</h4>
            <h5>Course: {education.course}</h5>
            <h5>Date completed: {education.completed}</h5>
            
            <Input type= "text" label="School" placeholder="Enter school name" value={education.school} onChange={handleSchoolNameChange} />{' '}
            <Input label="Course name" placeholder = "Enter name of course studied" value = {education.course} onChange={handleCourseChange} />{' '}
            <Input type="date" label="Completed" placeholder = "Enter date of course completion" value = {education.completed} onChange={handleCompletedChange} />{' '}
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

// function schoolsList(){
//     return {
//         schools.map(school => {
            
//         })
//     }
// }

