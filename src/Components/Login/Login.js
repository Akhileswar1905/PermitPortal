import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [studData, setStudData] = useState({});
  const [facData, setFacData] = useState({});
  const [hodData, sethodData] = useState({});
  const [errMsg1, setErrMsg1] = useState("none");
  const [errMsg2, setErrMsg2] = useState("none");
  const [errMsg3, setErrMsg3] = useState("none");
  const navigate = useNavigate();
  const loginStudent = async (event) => {
    event.preventDefault();
    console.log(studData);
    try {
      const data = await axios.post(
        "http://localhost:8000/student/login",
        studData
      );
      console.log(data);
      localStorage.setItem("id", data.data.student._id);
      navigate("/stuDashboard");
    } catch (error) {
      console.log(error);
      setErrMsg1("block");
    }
  };

  const loginFaculty = async (event) => {
    event.preventDefault();
    console.log(facData);
    try {
      const data = await axios.post(
        "http://localhost:8000/faculty/login",
        facData
      );
      console.log(data);
      localStorage.setItem("id", data.data.faculty._id);

      navigate("/facDashboard");
    } catch (error) {
      console.log(error);
      setErrMsg2("block");
    }
  };

  const loginHoD = async (event) => {
    event.preventDefault();
    console.log(hodData);
    try {
      const data = await axios.post("http://localhost:8000/hod/login", hodData);
      console.log(data);
      localStorage.setItem("id", data.data.hod._id);

      navigate("/hodDashboard");
    } catch (error) {
      console.log(error);
      setErrMsg3("block");
    }
  };

  const studChange = async (event) => {
    // console.log(event.target.value);
    setStudData({ ...studData, [event.target.name]: event.target.value });
  };
  const facChange = async (event) => {
    // console.log(event.target.value);
    setFacData({ ...facData, [event.target.name]: event.target.value });
  };
  const hodChange = async (event) => {
    // console.log(event.target.value);
    sethodData({ ...hodData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <header className="heading">
        <h1>Login</h1>
      </header>
      <div className="loginContainer">
        <div className="box">
          <div className="student-form">
            <form>
              <div className="bar"></div>
              <div className="formLabel">
                <h2>Student Login</h2>
                <label htmlFor="userId">UserID</label>
                <input
                  type="text"
                  id="userId"
                  name="rollNo"
                  className="formInput"
                  required
                  onChange={(e) => studChange(e)}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="pwd">Password</label>
                <input
                  onChange={(e) => studChange(e)}
                  type="password"
                  id="pwd"
                  name="password"
                  className="formInput"
                  required
                />
              </div>
              <div className="formLabel">
                <button className="formButton" onClick={(e) => loginStudent(e)}>
                  Login
                </button>
              </div>
              <p className="err" style={{ display: errMsg1 }}>
                Wrong Credientials
              </p>
              <p>
                Don't have an account <Link to="/regstud">Click Here</Link>
              </p>
            </form>
          </div>
          <div className="faculty-form">
            <form>
              <div className="bar"></div>
              <div className="formLabel">
                <h2>Faculty Login</h2>
                <label htmlFor="userId">UserID</label>
                <input
                  type="text"
                  id="userId"
                  className="formInput"
                  name="rollNo"
                  required
                  onChange={(e) => facChange(e)}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  id="pwd"
                  className="formInput"
                  name="password"
                  required
                  onChange={(e) => facChange(e)}
                />
              </div>

              <div className="formLabel">
                <button className="formButton" onClick={(e) => loginFaculty(e)}>
                  Login
                </button>
              </div>
              <p className="err" style={{ display: errMsg2 }}>
                Wrong Credientials
              </p>
              <p>
                Don't have an account <Link to="/regfac">Click Here</Link>
              </p>
            </form>
          </div>
          <div className="faculty-form">
            <form>
              <div className="bar"></div>
              <div className="formLabel">
                <h2>HoD Login</h2>
                <label htmlFor="userId">UserID</label>
                <input
                  type="text"
                  id="userId"
                  className="formInput"
                  name="rollNo"
                  required
                  onChange={(e) => hodChange(e)}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  id="pwd"
                  className="formInput"
                  name="password"
                  required
                  onChange={(e) => hodChange(e)}
                />
              </div>

              <div className="formLabel">
                <button className="formButton" onClick={(e) => loginHoD(e)}>
                  Login
                </button>
              </div>
              <p className="err" style={{ display: errMsg3 }}>
                Wrong Credientials
              </p>
              <p>
                Don't have an account <Link to="/reghod">Click Here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
