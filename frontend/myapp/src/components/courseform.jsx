import React, { useContext, useState } from 'react'
import { Authcon } from './usecontext'
import api from '../axios/axios'



const Courseform = () => {

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
        <form onSubmit={submit} autoComplete="off">

<label>Name</label><br></br>
<input onChange={uservalue} name="name" type="text"></input><br></br>

<label>Content</label><br></br>
<input onChange={uservalue} type="text" name="content" ></input><br></br>

<label>Instructor</label><br></br>
<input onChange={uservalue} type="text" name="instructor"></input><br></br>


<input type="submit"></input>
</form>
    </div>
  )
}

export default Courseform