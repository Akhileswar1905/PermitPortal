import { useEffect, useState } from "react";
import "./Permission.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Page1 = () => {
  const id = localStorage.getItem("id");
 const [user,setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async ()=>{
        const res = await axios.get(`https://ups-api-f0me.onrender.com/user/${id}`);
        console.log(res)
        setUser(res.data.user);
    }
    fetchUser();
  },[id])

  const navigate = useNavigate();
  const handleSubmit = ()=>{
    navigate("/perm2",{state:{user:user}})
  }

  return (
    <div className="perm-container">
      <h1>Permission Page</h1>
      <div className="sub-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="formBox">
            <h3>Student Details</h3>
            <div className="form-label">
              <label htmlFor="name">Name</label>
              <input type="text" value={user?user.name:"Loading"} readOnly />
            </div>
            <div className="form-label">
              <label htmlFor="rollNo">Roll No</label>
              <input type="text" value={user?user.rollNo:"Loading"} readOnly />
            </div>
            <div className="form-label">
              <label htmlFor="dept">Department</label>
              <input type="text" value={user?user.department:"Loading"} readOnly />
            </div>
          </div>
          <div className="form-label">
            <input type="submit" value="Next" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page1;
