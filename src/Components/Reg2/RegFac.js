import { useState } from "react";
import "./RegFac.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegFac = () => {
  const [facData, setfacData] = useState({});

  const navigate = useNavigate();
  const regFac = async (event) => {
    event.preventDefault();
    console.log(facData);
    try {
      const data = await axios.post(
        "https://ups-api-f0me.onrender.com/faculty/signup",
        facData
      );
      console.log(data);
      localStorage.setItem("id", data.data.faculty._id);
      navigate("/facDashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const facChange = async (event) => {
    console.log(event.target.value);
    setfacData({ ...facData, [event.target.name]: event.target.value });
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
                required
                type="text"
                id="name"
                className="formInput"
                name="name"
                onChange={(e) => facChange(e)}
              />
            </div>
            <div className="formLabel">
              <label htmlFor="id">User ID</label>
              <input
                required
                type="text"
                id="id"
                className="formInput"
                name="rollNo"
                onChange={(e) => facChange(e)}
              />
            </div>
            <div className="formLabel">
              <label htmlFor="dept">Class and Section</label>
              <input
                required
                type="text"
                id="dept"
                className="formInput"
                name="classAndSection"
                onChange={(e) => facChange(e)}
              />
            </div>
            <div className="formLabel">
              <label htmlFor="dept">Department</label>
              <input
                required
                type="text"
                id="dept"
                className="formInput"
                name="dept"
                onChange={(e) => facChange(e)}
              />
            </div>
            <div className="formLabel">
              <label htmlFor="pwd">Password</label>
              <input
                required
                type="password"
                id="pwd"
                className="formInput"
                name="password"
                onChange={(e) => facChange(e)}
              />
            </div>
            <div className="formLabel">
              <input
                required
                type="submit"
                className="formButton"
                value="Submit"
                onClick={(e) => regFac(e)}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="box-1">
        <div className="regf-circle c1">
          <h1>Faculty Registration</h1>
        </div>
      </div>
    </div>
  );
};

export default RegFac;
