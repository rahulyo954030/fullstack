import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  let pvtroute = JSON.parse(localStorage.getItem("pvtroute"))
    const proceedtopay =()=>{
        if(pvtroute===null){
          navigate("/login")
        }
        else{
          navigate("/payment")
        }
    }
  return (
    <div>
        <div></div>
        <div>
            <button onClick={proceedtopay}>Proceed for Payment</button>
        </div>
    </div>
  )
}

export default Cart