import { useNavigate } from "react-router-dom";
import "./RegStud.css";
import axios from "axios";
import { useState } from "react";

const RegStud = () => {
  const [studData, setStudData] = useState({});

  const navigate = useNavigate();
  const regStudent = async (event) => {
    event.preventDefault();
    console.log(studData);
    try {
      const data = await axios.post(
        "http://localhost:8000/student/signup",
        studData
      );
      console.log(data);
      localStorage.setItem("id", data.data.student._id);
      navigate("/stuDashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const studChange = async (event) => {
    // console.log(event.target.value);
    setStudData({ ...studData, [event.target.name]: event.target.value });
  };

  return (
    <div className="regs-body">
      <div className="box-1">
        <div className="circle regs-c1">
          <h1>Student Registration</h1>
        </div>
      </div>
      <div className="regs-box-2">
        <div className="regs-form-box">
          <form>
            <div className="formLabel">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => studChange(e)}
                id="name"
                className="formInput"
                name="name"
              />
            </div>
            <div className="formLabel">
              <label htmlFor="id">User ID</label>
              <input
                type="text"
                onChange={(e) => studChange(e)}
                id="id"
                className="formInput"
                name="rollNo"
              />
            </div>
            <div className="formLabel">
              <label htmlFor="dept">Department and Section</label>
              <input
                type="text"
                onChange={(e) => studChange(e)}
                id="dept"
                className="formInput"
                name="classAndSection"
              />
            </div>
            <div className="formLabel">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={(e) => studChange(e)}
                id="pwd"
                className="formInput"
                name="password"
              />
            </div>
            <div className="formLabel">
              <input
                type="submit"
                onClick={(e) => regStudent(e)}
                className="formButton"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegStud;
