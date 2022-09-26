import React from 'react'

const Signup = () => {

    const submit=()=>{

    }
  return (
    <div>
        <form  onSubmit={submit}>
           <input type="text" placeholder='name...'/>
           <br /><input type="text" placeholder='username...'/>
           <br /><input type="text" placeholder='email...'/>
           <br /><input type="text" placeholder='password...'/>
           <br /><input type="text" placeholder='mobile...'/>
           <br /><input type="text" placeholder='country...'/>
           <br /><select>
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