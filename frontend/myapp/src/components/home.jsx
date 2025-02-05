import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
    const path= useNavigate()

    function toregister(){
        path('/register')
    }

    function tologin(){
        path('/login')
    }
    
  return (
    <div>
    <div>Welcome!</div>
    <button onClick={toregister}>Register</button>
    <button onClick={tologin}>Login</button>
    </div>
  )
}

export default Home