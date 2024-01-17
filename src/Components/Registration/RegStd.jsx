import React, { useState } from "react";
import image3 from "../../imgs/image3.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const RegStd = () => {
  const location = useLocation();
  const { user } = location.state;
  const [form, setForm] = useState(user);
  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/user/signup", form);
    console.log(res);
    localStorage.setItem("id", res.data.user._id);
    navigate("/dashboard");
  };
  return (
    <div className="reg-container">
      <div className="reg-sec1">
        <div className="reg-formBox reg-3">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign Up</h1>
            <div className="formbox-label reg-label">
              <label htmlFor="classAndSection">Class and Section</label>
              <input
                type="text"
                name="classAndSection"
                id="classAndSection"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="formSubmit">
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
      <div className="reg-sec2">
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default RegStd;
