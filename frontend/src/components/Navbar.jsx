import React from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/Navbar.css"
const Navbar = () => {
    const navigate =useNavigate()
    let pvtroute = JSON.parse(localStorage.getItem("pvtroute"))
   
   const logout=()=>{
    localStorage.removeItem('pvtroute')   
    navigate("/login")
   }
  return (
    <div className='navbar_container'>
        <div>
        <img onClick={()=>navigate("/")} src="https://media.giphy.com/avatars/theplayfulindian/YjjViUgWiQdb.gif" alt="" />
        <h3 onClick={()=>navigate("/")}>SAMOSE WALE</h3>
        </div>
        <h3 onClick={()=>navigate("/samose")}>SAMOSE</h3>
        <h3 onClick={()=>navigate("/cart")}>CART</h3>
        {pvtroute===null?(<h3 onClick={()=>navigate("/login")}>SIGN IN</h3>):
        (<h3 onClick={logout}>LOGOUT to <span>{pvtroute.username}</span></h3>)}
  
    </div>
  )
}

export default Navbar