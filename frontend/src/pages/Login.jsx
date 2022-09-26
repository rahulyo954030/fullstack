import React from 'react'
import axios from "axios"
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/Signup.css"


let initialdata ={
  username : "",
  password : ""
}
const Login = () => {
  const navigate = useNavigate()
 
  const [logindata,setLogindata]= useState(initialdata)

  const handlechange=(e)=>{
    const {name, value} = e.target
    setLogindata({...logindata,[name]:value})
  }
  const submit=(e)=>{
    e.preventDefault()
    setLogindata({...initialdata})
    axios.post("http://localhost:8080/auth/login", logindata)
    .then((res)=>{console.log(res.data)
    setLogindata({...initialdata})
    navigate("/")
    })
    .catch((e)=>{
      if(e.response.status ===401){
        alert("Invalid Credentials")
      }
    })
  }

  return (
    <div className="signup_form_container">
      <h2>Login Account</h2>
        <form onSubmit={submit} className="signup_form">
        <br /><h5>Username</h5>
        <input type="text" placeholder='username...' name='username' value={logindata.username} onChange={handlechange} required/>
        <br /><h5>Password</h5>
          <input type="text" placeholder='password...' name='password' value={logindata.password} onChange={handlechange} required/>
        <br /><input type="submit" className="signupbutton" value="Login"/>
        </form>
    </div>
  )
}

export default Login