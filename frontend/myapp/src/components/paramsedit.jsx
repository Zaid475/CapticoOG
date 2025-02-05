import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../axios/axios';

const Paramsedit = () => {
    const[state,updatestate]=useState({})

    const{id}=useParams();
    useEffect(()=>{
        if(id){
        
    

        singlecoursedata()
    }

    },[id])
    

    async function singlecoursedata(){

        try{
            const response=await api.post(`/course/singlecourse/${id}`)
            if(response.data.success){
                console.log(response.data.coursedata)
                updatestate(response.data.coursedata)
            }
            
        }
        catch(error){
            console.log(error)
        }
        }
    
  return (
    <div>
      <h1>{state.name}</h1>
      <h1>{state.content}</h1>
      <h1>{state.instructor}</h1>
    </div>
  )
}

export default Paramsedit
