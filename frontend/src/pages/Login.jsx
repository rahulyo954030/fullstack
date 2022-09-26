import React from 'react'

const Login = () => {
    const submit=()=>{
        
    }
  return (
    <div>
        <form onSubmit={submit}>
        <input type="text" />
        <br /><input type="text" />
        <br /><input type="submit" />
        </form>
    </div>
  )
}

export default Login