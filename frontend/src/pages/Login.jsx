import React from 'react'
import axios from "axios"
import { useState } from 'react'


let initialdata ={
  username : "",
  password : ""
}
const Login = () => {
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
    })
    .catch((e)=>{
      if(e.response.status ===401){
        alert("Invalid Credentials")
      }
    })
  }

  return (
    <div>
        <form onSubmit={submit}>
        <br /><input type="text" placeholder='username...' name='username' value={logindata.username} onChange={handlechange} required/>
           <br /><input type="text" placeholder='password...' name='password' value={logindata.password} onChange={handlechange} required/>
        <br /><input type="submit" />
        </form>
    </div>
  )
}

export default Login