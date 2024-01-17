import './Login.css'
import image3 from "../../imgs/image3.png"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login2 = () => {
  const [errMsg, setErrMsg] = useState("none");
  const [form,setForm] = useState({})
  const navigate = useNavigate();
// Login Code
const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
}

const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:8000/user/signin",
        form
      );
      localStorage.setItem("id", data.data.user._id);
      localStorage.setItem("role", data.data.user.role);
      
      if(data.data.user.role === 'staff'){
        localStorage.setItem("count", data.data.user.permissionRequests.length);
      }

      navigate("/dashboard");
    } catch (error) {
      setErrMsg("block");
    }
}

  return (
    <div className='login2-container'>
      <div className="login2-sec1">
        <img src={image3} alt="img" />
      </div>
      <div className="login2-sec2">
        <div className="login2-formbox ">
            <form onSubmit={(e)=>handleLogin(e)}>
                <h1>Login</h1>
                <div className="formbox-label">
                    <label htmlFor="rollNo">Roll No</label>
                    <input onChange={(e)=>handleChange(e)} type="text" name='rollNo' id='rollNo' required/>
                </div>
                <div className="formbox-label">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>handleChange(e)} type="password" name='password' id='password' required/>
                </div>
                <div className="errMsg">
                    <p style={{display:errMsg}}>Invalid Credentials</p>
                </div>
                <div className="formSubmit">
                    <input  type="submit" value="Login" />
                </div>
                <p>Don't have an account <Link to={"/register"}>Click Here</Link></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login2
