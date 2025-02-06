import React, { useContext, useState } from 'react'
import { Authcon } from './usecontext'
import api from '../axios/axios'
import { useNavigate } from 'react-router-dom'



const Courseform = () => {
    const path=useNavigate()
    const {state,dispatch}=useContext(Authcon)

    const[course,updatecourse]=useState({
        name: "",
        content:"",
        instructor:"",
        userid:state?.user?.userId
    })
    
    function uservalue(event){
        updatecourse({...course, [event.target.name]: event.target.value })
        console.log(event.target.name,"name",event.target.value,"Value")
    }
    
   async function submit(event){
        event.preventDefault()
        console.log(course.name,course.content,course.instructor,course.userid)
        try{
            const response=await api.post("/course/create",{course})
            if(response.data.success){
                alert(response.data.message)
                path("/dashboard")
            }
            else{
                alert(response.data.message)
            }


        }
        catch(error){
            alert(error)

        }
        
        
    }
  return (
    <div>
        <button onClick={()=>{path("/")}}>HOME</button>
        <button onClick={()=>{path("/dashboard")}}>DASHBOARD</button>

        <form onSubmit={submit} autoComplete="off">
<h1>Course Creation</h1>
<label>Name</label>
<input onChange={uservalue} name="name" type="text"></input>

<label>Content</label>
<input onChange={uservalue} type="text" name="content" ></input>

<label>Instructor</label>
<input onChange={uservalue} type="text" name="instructor"></input>


<input type="submit"></input>
</form>
    </div>
  )
}

export default Courseform