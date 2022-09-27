import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css"

let initialdata = {
  name: "",
  username: "",
  email: "",
  password: "",
  mobile: "",
  country: "",
  gender: "",
};
const Signup = () => {
  const navigate = useNavigate();
  const [signupdata, setSignupdata] = useState(initialdata);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setSignupdata({ ...signupdata, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    // console.log(signupdata);
    setSignupdata({ ...initialdata });
    axios
      .post("http://localhost:8080/auth/signup", signupdata)
      .then((res) => {
        // console.log(res.data);
        setSignupdata({ ...initialdata });
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="signup_form_container">
      <h2>Create Account</h2>
      <form onSubmit={submit} className="signup_form">
        <h5>Your name</h5>
        <input
          type="text"
          placeholder="name..."
          name="name"
          value={signupdata.name}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Username</h5>
        <input
          type="text"
          placeholder="username..."
          name="username"
          value={signupdata.username}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Email</h5>
        <input
          type="text"
          placeholder="email..."
          name="email"
          value={signupdata.email}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Password</h5>
        <input
          type="text"
          placeholder="password..."
          name="password"
          value={signupdata.password}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Mobile</h5>
        <input
          type="text"
          placeholder="mobile..."
          name="mobile"
          value={signupdata.mobile}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Country</h5>
        <input
          type="text"
          placeholder="country..."
          name="country"
          value={signupdata.country}
          onChange={handlechange}
          required
        />
        <h5>Gender</h5>
        <select name="gender" value={signupdata.gender} onChange={handlechange} required>
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unspecified">Unspecified</option>
        </select>
        <br />
        <input className="signupbutton" type="submit" value="SIGN UP" />
        <p className="createteaccountmsg" onClick={()=>navigate("/login")}>Click here if you have already an account</p>
      </form>
    </div>
  );
};

export default Signup;
