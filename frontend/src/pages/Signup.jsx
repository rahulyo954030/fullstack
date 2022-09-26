import React from 'react'
import axios from "axios"
import { useState } from 'react'

let initialdata ={
  name:"",
  username : "",
  email : "",
  password : "",
  mobile : "",
  country : "",
  gender : "",
}
const Signup = () => {
  const [signupdata,setSignupdata]= useState(initialdata)

    const handlechange=(e)=>{
      const {name, value} = e.target
      setSignupdata({...signupdata,[name]:value})
    }
    const submit=(e)=>{
      e.preventDefault()
      console.log(signupdata)
      setSignupdata({...initialdata})
      axios.post("http://localhost:8080/auth/signup", signupdata)
      .then((res)=>{console.log(res.data)
      setSignupdata({...initialdata})
      })
      .catch((e)=>console.log(e))
    }
  return (
    <div>
        <form  onSubmit={submit}>
           <input type="text" placeholder='name...' name='name' value={signupdata.name} onChange={handlechange}/>
           <br /><input type="text" placeholder='username...' name='username' value={signupdata.username} onChange={handlechange}/>
           <br /><input type="text" placeholder='email...' name='email' value={signupdata.email} onChange={handlechange}/>
           <br /><input type="text" placeholder='password...' name='password' value={signupdata.password} onChange={handlechange}/>
           <br /><input type="text" placeholder='mobile...' name='mobile' value={signupdata.mobile} onChange={handlechange}/>
           <br /><input type="text" placeholder='country...' name='country' value={signupdata.country} onChange={handlechange}/>
           <br /><select name='gender' value={signupdata.gender} onChange={handlechange}>
                    <option>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unspecified">Unspecified</option>
                </select><br />
           <input  type="submit" value="SIGN UP"/> 
        </form>
    </div>
  )
}

export default Signup