import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Permission.css'
const Page3 = () => {
  const location = useLocation();
  const data = location.state.user;
  const [form, setForm] = useState(data);
  const [users, setUsers] = useState(null);
    const [rec, setRec] = useState(null);
  useEffect(() => {
    const getFac = async () => {
      const res = await axios.get("https://ups-api-f0me.onrender.com/user/staff");
      setUsers(res.data.users);
    };
    getFac();
  }, []);

  const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        setForm((prevForm) => ({
          ...prevForm,
          request: {
            ...prevForm.request,
            receiver: rec,
            sender: localStorage.getItem("id")
          }
        }));
        const updatedForm = {
          ...form,
          request: {
            ...form.request,
            receiver: rec,
            sender: localStorage.getItem("id")
          }
        };      
        const res = await axios.post("https://ups-api-f0me.onrender.com/user/req",updatedForm);
        if(res){
            navigate("/dashboard")
        }
        
    }

  return (
    <div className='perm-container'>
      <div className="sub-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="form-label">
            <label htmlFor="query">What kind of permission?</label>
            <input type="text" name='query' />
          </div>
          <div className="form-label">
            <label htmlFor="fac">Select the faculty you want to ask permission</label>
            <select name="fac" onChange={(e) => setRec(e.target.value)}>
                <option value="select">Select</option>
              {users ? (
                users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))
              ) : (
                <option value="loading">Loading...</option>
              )}
            </select>
          </div>
          <div className="form-label">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page3;
