//Create array of schools
//push each school detail into an object
//submit button to add school - then render the name
//add remove school?
//add edit school?

import { useState } from "react";
import  '../styles/Experience.css';



export default function Experience() {
    const blankExperience = {workplace: '', position:'', responsibilities: []}
    const [expId, setExpId] = useState(0)
    const [experience, setExperience] = useState(blankExperience)
    
    const [experienceArray, setExperienceArray] =useState([])

  

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'lightpurple'
    };
    

    function handleWorkplaceChange(e){
        const newExperience = {...experience, workplace: (e.target.value)}
        setExperience(newExperience)
    }

     function handlePositionChange(e){
        const newExperience = {...experience, position: (e.target.value)}
         setExperience(newExperience)
    }

     function handleResponsibilitiesChange(e){
        const newExperience = {...experience, responsibilities: (e.target.value)}
         setExperience(newExperience)
    }



    function addExperience(){
        setExpId(expId+1)
       const newExperience = {...experience, id:expId }
        setExperienceArray([...experienceArray, newExperience])
        setExperience(blankExperience)

    }

  
    
   
        return(
            <>
            {experienceArray.length>0 ? <h3>Experience</h3> : null }
            {experienceArray.map(exp => {
                return (
                    <div style={containerStyle} className="experience-frame">
                        <ExperienceFrame style={containerStyle} className="experience-frame" workplace = {exp.workplace} position = {exp.position} responsibilities={exp.responsibilities} />
                    </div>
                )
            })}
                      
            <Input type= "text" label="Company name" placeholder="Enter company" value={experience.workplace} onChange={handleWorkplaceChange} />{' '}
            <Input label="Position title" value = {experience.position} onChange={handlePositionChange} />{' '}
            <textarea  label="responsibilities" placeholder = "Enter responsibilities of your role" value = {experience.completed} onChange={handleResponsibilitiesChange} />{' '}
            <button onClick={(addExperience)}>Add Experience</button>
             {/* <div>Schools: {schools.map(s =>(
                <p key={s.school}>{s.school} {s.id}</p>
            ))}</div>  */}
            </>
        )


}



function Input({label, placeholder, value, onChange, type}){
    return (
    <>
        <label>{label}{': '}</label>
    
            <input type ={type} placeholder={placeholder} value={value} onChange={onChange}  />
       </>
    )
}
function ExperienceFrame({workplace, position, responsibilities}){
   
    return (
        <>
          
            
            <h4>Company Name: </h4>
            <p>{workplace}</p>
            <h5>Job title: </h5>
            <p>{position}</p>
            <h5>Responsibilities: </h5>
            <p>{responsibilities}</p>
        </>
    )
}

