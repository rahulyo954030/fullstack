import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import passwordhide from "../images/invisible.png";
import passwordvisible from "../images/eye.png";

let initialdata = {
  username: "",
  password: "",
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const navigate = useNavigate();

  const [logindata, setLogindata] = useState(initialdata);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLogindata({ ...logindata, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/login", logindata)
      .then((res) => {
        // console.log({isLoggedIn:true,message:res.data.message,token:res.data.token});
        localStorage.setItem("pvtroute", JSON.stringify({
          isLoggedIn:true,
          token:res.data.token,
          name:logindata.name,
          username:logindata.username,
          gender:logindata.gender,

        }))
        setLogindata({ ...initialdata });
        setSuccess(true)
        console.log(logindata)
        setTimeout(() => {
          setSuccess(false)
          navigate("/");
        }, 1500);
        
      })
      .catch((e) => {
        if (e.response.status === 401) {
          setFailed(true)
        setTimeout(() => {
          setFailed(false)
        }, 1500);
        }
      });
  };

  return (
    <div className="signup_form_container">
      <h2>Login Account</h2>
      <form onSubmit={submit} className="signup_form">
      {success?<h2 style={{color:"green"}}><span>✔️</span> Login Successfully</h2>: <h2></h2> }
      {failed? <h2 style={{color:"red"}}><span >⚠️</span> Incorrect Credentials</h2>: <h2></h2> }
        <br />
        <h5>Username</h5>
        <input
          type="text"
          placeholder="username..."
          name="username"
          value={logindata.username}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Password</h5>
        <div className="show_hide_password_container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password..."
            name="password"
            value={logindata.password}
            onChange={handlechange}
            required
          />
          <span
            className="show_hide_password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <img src={passwordvisible} alt="" />
            ) : (
              <img src={passwordhide} alt="" />
            )}
          </span>
      
        </div>
        <input type="submit" className="signupbutton" value="LOGIN" />
        <br />
        <p className="createteaccountmsg" onClick={()=>navigate("/signup")}>Create new account</p>
      </form>
     
    </div>
  );
};

export default Login;
