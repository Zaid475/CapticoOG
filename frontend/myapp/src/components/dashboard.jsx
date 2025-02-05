import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcon } from './usecontext'
import api from '../axios/axios'


const Dashboard = () => {
  const{state,dispatch}=useContext(Authcon)
  const[courses,updatedcourses]=useState([])
  const[userid,updateduserid]=useState("")

  
  
  const path=useNavigate()
  useEffect(()=>{
    if(state?.user?.name)
    {
    updateduserid(state?.user?.userId)
    console.log(userid,"useridbc23")
    
    }


  },[state])


  useEffect(()=>{
   async  function fetchcourse(){
    if(userid){
    try{
      const response=await api.post("/course/fetch",{userid})
      if(response.data.success){
        alert(response.data.message)
      }
      



    }

    catch(error){
      console.log(error)

    }


    }
  }
    fetchcourse();
    

  },[userid])
  
  
  function tocreateform(){
    path('/course')
  }
  return (
    <div>
    <div>dashboard</div>
    <h1>Welcome {state?.user?.name}</h1>

    <button onClick={tocreateform}>Create</button>
    <button>Edit</button>
    <button>Delete</button>
    </div>
  )
}

export default Dashboard