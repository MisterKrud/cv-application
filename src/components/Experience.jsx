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

    function handleDeleteClick(){
        const parentRow = document.activeElement.parentElement
        const rowIndex = parentRow.querySelector('.idx')
        const idx = rowIndex.innerHTML
        const itemIndex= experienceArray.findIndex(item => item.id===parseInt(idx))
        const newArrayA = experienceArray.slice(0, itemIndex)
        const newArrayB = experienceArray.slice(itemIndex+1) 
        const newArray = [...newArrayA, ...newArrayB]
        // experienceArray.splice(itemIndex, 0)
        // experienceArray.map(exp =>
        //     console.log(exp)
        // )
        setExperienceArray(newArray)
        setExperience(blankExperience)
 
        
    }

  
    
   
        return(
             
            <div>
            {experienceArray.length>0 ? <h3>Experience</h3> : null }

            
             <div className="experience-frame">
                
            {experienceArray.length>0? (
                experienceArray.map(exp => {
                return (
                   
                        <ExperienceFrame key={exp.id} idx={exp.id} workplace = {exp.workplace} position = {exp.position} responsibilities={exp.responsibilities} onClick = {handleDeleteClick} />
                    
                )
            }) ) : null}
            </div>
                     <div className="inputs">
            <Input name="workplace" type= "text" label="Company name" placeholder="Enter company" value={experience.workplace} onChange={handleWorkplaceChange} />{' '}
            <Input name="position" label="Position title" value = {experience.position} onChange={handlePositionChange} />{' '}
            <textarea  label="responsibilities" placeholder = "Enter responsibilities of your role" value = {experience.completed} onChange={handleResponsibilitiesChange} />{' '}
            <button onClick={(addExperience)}>Add Experience</button></div> 
             {/* <div>Schools: {schools.map(s =>(
                <p key={s.school}>{s.school} {s.id}</p>
            ))}</div>  */}
            </div>
        )


}



function Input({label, placeholder, value, onChange, type}, name){
    return (
    <div className="details-input-div">
        <label htmlFor = {name}>{label}{': '}</label>
    
            <input type ={type} name={name} placeholder={placeholder} value={value} onChange={onChange}  />
       </div>
    )
}
function ExperienceFrame({workplace, position, responsibilities, onClick, idx}){
   
    return (
        <div className="info-row">
          <div className = "idx">
            {idx}
          </div>
            <div className="info-cell">
            <h4>Company Name: </h4>
            <p>{workplace}</p>
            </div>
            <div className="info-cell">
            <h5>Job title: </h5>
            <p>{position}</p>
            </div>
            <div className="info-cell">
            <h5>Responsibilities: </h5>
            <p>{responsibilities}</p>
            </div>
            <button onClick={onClick}>❌</button>
        </div>
    )
}

