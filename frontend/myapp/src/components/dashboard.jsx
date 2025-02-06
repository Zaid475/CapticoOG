import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcon } from './usecontext'
import api from '../axios/axios'
import '../styles/Dashboard.css'
import Home from './home'


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
    
    if(courses!="")
    console.log(courses,"coursssssess")

    


  },[courses])


  useEffect(()=>{
   async  function fetchcourse(){
    if(userid){
    try{
      const response=await api.post("/course/fetch",{userid})
      if(response.data.success){
        // alert(response.data.message)
        updatedcourses(response.data.idexist)
        
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
   
    <h1 class="course-details">Welcome {state?.user?.name}!</h1>
    <div >
    {courses.map((item)=>(
      <div class="course-card"  onClick={()=>(path(`/singlecourse/${item._id}`))}>
      <h1> Name : {item.name}</h1>
      <h1> Content : {item.content}</h1>
      <h1> Instructor : {item.instructor}</h1>
      

      </div>
    )
    
    )}
    </div>

    <button onClick={tocreateform}>Create</button>
    <button>Edit</button>
    <button>Delete</button>
    
    </div>
  )
}

export default Dashboard