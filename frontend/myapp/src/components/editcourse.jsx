import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../axios/axios'

const Editcourse = () => {
    const{id}=useParams()
    const path=useNavigate()
     const[course,updatecourse]=useState({
            name: "",
            content:"",
            instructor:"",
            
        })

    function uservalue(event){
        updatecourse({...course, [event.target.name]: event.target.value })
        console.log(event.target.name,"name",event.target.value,"Value")
    }

    async function submit(event){
        event.preventDefault()
        
        try{
            const response=await api.put("/course/edit",{course,id})
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
       

        <form onSubmit={submit} autoComplete="off">
        <h1>Course updation </h1>
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

export default Editcourse
