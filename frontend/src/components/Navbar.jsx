import React from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/Navbar.css"
const Navbar = () => {
    const navigate =useNavigate()
    
  return (
    <div className='navbar_container'>
        <div>
        <img onClick={()=>navigate("/")} src="https://media.giphy.com/avatars/theplayfulindian/YjjViUgWiQdb.gif" alt="" />
        <h3 onClick={()=>navigate("/")}>SAMOSE WALE</h3>
        </div>
        <h3 onClick={()=>navigate("/")}>SAMOSE</h3>
        <h3 onClick={()=>navigate("/")}>CART</h3>
        <h3 onClick={()=>navigate("/login")}>SIGN IN</h3>
        <h3 onClick={()=>navigate("/signup")}>SIGN UP</h3>
    </div>
  )
}

export default Navbar