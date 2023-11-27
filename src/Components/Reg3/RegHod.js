import { useState } from "react";
import "./RegHod.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegHod = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const regHod = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ups-api-f0me.onrender.com/hod/signup",
        data
      );
      console.log(res);
      localStorage.setItem("id", res.data.hod._id);
      navigate("/hodDashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="regs-body">
      <div className="regs-box-2">
        <h1 className="header">SignUp</h1>
        <div className="regs-form-box">
          <form>
            <div className="formLabel">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="formInput"
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formLabel">
              <label htmlFor="id">User ID</label>
              <input
                type="text"
                id="id"
                className="formInput"
                name="rollNo"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formLabel">
              <label htmlFor="dept">Department</label>
              <input
                type="text"
                id="dept"
                className="formInput"
                name="dept"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formLabel">
              <label htmlFor="pwd">Password</label>
              <input
                type="password"
                id="pwd"
                className="formInput"
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formLabel">
              <input
                type="submit"
                className="formButton"
                value="Submit"
                onClick={(e) => regHod(e)}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="box-1">
        <div className="regf-circle c1">
          <h1>HOD Registration</h1>
        </div>
      </div>
    </div>
  );
};

export default RegHod;
