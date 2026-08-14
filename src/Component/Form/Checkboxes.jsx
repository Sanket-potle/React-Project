import { useState } from "react";

const Checkboes= () =>{
  const[skill,setSkill]=useState([]);
  const handleSkills=(e)=>{
console.log(e.target.value, e.target.checked)
if(e.target.checked){
  setSkill([...skill,e.target.value])
}else{
  setSkill([...skill.filter((item)=> item != e.target.value)])
}
  } 
return(
  <>
<h2>Slect Your Requirement</h2>
<input onChange={handleSkills} type="checkbox" id="php" value="php"/>
<label htmlFor="php">PHP</label>
<br/>
<br/>
<input onChange={handleSkills} type="checkbox" id="JS" value="JS"/>
<label htmlFor="JS">JS</label>
<br/>
<br/>
<input onChange={handleSkills} type="checkbox" id="CSS" value="CSS"/>
<label htmlFor="CSS">CSS</label>
<h1>{skill.toString()}</h1>
  </> 
)}
export default Checkboes;