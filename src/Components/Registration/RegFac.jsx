import React, { useState } from "react";
import image3 from "../../imgs/image3.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './Reg.css'
const RegFac = () => {
  const location = useLocation();
  const { user } = location.state;
  const [form, setForm] = useState(user);
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("https://ups-api-f0me.onrender.com/user/signup", form);
    
    localStorage.setItem("id", data.data.user._id);

    navigate("/dashboard");
  };

  return (
    <div className="reg-container">
      <div className="reg-sec1">
        <div className="reg-formBox reg-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign Up</h1>
            <div className="formbox-label reg-label">
              <label htmlFor="designation">Designation</label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="designation"
                id="designation"
                required
              />
            </div>

            <div className="formbox-label reg-label">
              <label htmlFor="coord">Coordinator of any class?</label>
              <div className="radioBtns">
                <div className="radioBtn">
                  <input
                    onChange={(e) => handleChange(e)}
                    type="radio"
                    name="coord"
                    id="true"
                    value={true}
                  />
                  <label htmlFor="true">Yes</label>
                </div>
                <div className="radioBtn">
                  <input
                    onChange={(e) => handleChange(e)}
                    type="radio"
                    name="coord"
                    id="false"
                    value={false}
                  />
                  <label htmlFor="false">No</label>
                </div>
              </div>
            </div>

            <div className="formbox-label reg-label">
              <label htmlFor="classcoord">
                Class and Section for which you are coordinating:{" "}
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="classcoord"
                id="classcoord"
              />
            </div>
            <div className="formbox-label reg-label">
              <label htmlFor="classCoordYear">Which Year?</label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="classCoordYear"
                id="classCoordYear"
              />
            </div>

            <div className="formSubmit">
              <input type="submit" value="Sign Up" />
            </div>
            <p></p>
          </form>
        </div>
      </div>
      <div className="reg-sec2">
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default RegFac;
