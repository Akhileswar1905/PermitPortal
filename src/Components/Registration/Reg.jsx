import "./Reg.css";
import image3 from "../../imgs/image3.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Reg = () => {
  const fcmToken = localStorage.getItem("fcmtoken");
  const [form, setForm] = useState({
    fcmToken: fcmToken,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bool = form.password === form.confirmPassword;
    console.log(form);
    if (bool) {
      if (form.role === "student")
        navigate("/regstud", { state: { user: form } });
      else if (form.role === "staff")
        navigate("/regfac", { state: { user: form } });
    } else {
      alert("Please check you password");
    }
  };
  return (
    <div className="reg-container">
      <div className="reg-sec1">
        <div className="reg-formBox">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign Up</h1>
            <div className="formbox-label reg-label">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="formbox-label reg-label">
              <label htmlFor="rollNo">Roll No</label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="rollNo"
                id="rollNo"
                required
              />
            </div>
            <div className="formbox-label reg-label">
              <label htmlFor="department">Department</label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="department"
                id="department"
                required
              />
            </div>
            <div className="formbox-label reg-label">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="formbox-label reg-label">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
              />
            </div>

            <div className="formbox-label reg-label">
              <label htmlFor="role">Role</label>
              <div className="radioBtns">
                <div className="radioBtn">
                  <input
                    onChange={(e) => handleChange(e)}
                    type="radio"
                    name="role"
                    id="std"
                    value={"student"}
                  />
                  <label htmlFor="std">Student</label>
                </div>
                <div className="radioBtn">
                  <input
                    onChange={(e) => handleChange(e)}
                    type="radio"
                    name="role"
                    id="staff"
                    value={"staff"}
                  />
                  <label htmlFor="staff">Staff</label>
                </div>
              </div>
            </div>
            <div className="formSubmit">
              <input type="submit" value="Next" />
            </div>
            <p>
              Already have an account <Link to={"/login"}>Click here</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="reg-sec2">
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default Reg;
