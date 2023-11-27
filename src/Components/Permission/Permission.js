import { useEffect, useState } from "react";
import "./Permission.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Permission = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const fetchUser = async () => {
    const id = localStorage.getItem("id");
    try {
      const res = await axios.get(`http://localhost:8000/student/${id}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchUser();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    // setData(...data, ...form/);
    Object.assign(data, form);

    // console.log(data);

    try {
      const res = await axios.post("http://localhost:8000/student", data);
      console.log(res);
      navigate("/stuDashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="permission-page">
      <h1 className="heading">Permission Details</h1>
      <div className="permission-container">
        <div className="page-1">
          <div className="perm-form-box">
            <h3>Student Details</h3>
            <form>
              <div className="formLabel">
                <label htmlFor="name">Student Name</label>
                <input
                  type="text"
                  id="name"
                  className="formInput"
                  value={data ? data.name : "loading"}
                  readOnly
                />
              </div>
              <div className="formLabel">
                <label htmlFor="id">User ID</label>
                <input
                  type="text"
                  value={data ? data.rollNo : "loading"}
                  id="id"
                  className="formInput"
                  readOnly
                />
              </div>
              <div className="formLabel">
                <label htmlFor="dept">Class and Section</label>
                <input
                  type="text"
                  value={data ? data.classAndSection : "loading"}
                  id="dept"
                  className="formInput"
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
        <div className="page-2">
          <div className="perm-form-box">
            <h3>Permission Details</h3>
            <form>
              <div className="formLabel">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" className="formInput" />
              </div>
              <div className="formLabel">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="formInput"
                  name="subject"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="letter">Permission Letter</label>
                <textarea
                  id="letter"
                  className="formInput`"
                  name="permissionLetter"
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <div className="formLabel">
                <label>Documents</label>
                <label htmlFor="files" className="files">
                  <p>Upload</p>
                </label>
                <input
                  type="file"
                  id="files"
                  className="formInput"
                  style={{ display: "none" }}
                  name="documents"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="formButton">
        <button className="btn" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Permission;
