import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Page2 = () => {
  const location = useLocation();
  const data = location.state.user;
  // console.log(data)
  const navigate = useNavigate();
  const [form, setForm] = useState(data);
  const [req, setReq] = useState({});
  const [file, setFile] = useState(null);


  useEffect(()=>{
    const uploadFile = ()=>{
    
        const storageRef = ref(storage, `${file.name}-${v4()}`);
    uploadBytes(storageRef,file).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        console.log(snapshot.ref)
        getDownloadURL(snapshot.ref).then((url)=>setReq({...req,docs:url}))        });
      }
        if(file){
            uploadFile();
        }    
  },[file,req])
  
  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFile(e.target.files[0]);
      return;
    }
    setReq({ ...req, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm((prevForm) => ({
      ...prevForm,
      request: req,
    }));
    const updatedForm = {
      ...form,
      request: req,
    };

    console.log(updatedForm);
    navigate("/perm3", { state: { user: updatedForm } });
  };
  return (
    <div className="perm-container">
      <div className="sub-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Permission Details</h3>
          <div className="form-label">
            <label htmlFor="date">Date</label>
            <input
              onChange={(e) => handleChange(e)}
              type="date"
              name="date"
              id="date"
              required
            />
          </div>
          <div className="form-label">
            <label htmlFor="reason">Subject</label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="subject"
              required
            />
          </div>
          <div className="form-label">
            <label htmlFor="status">Body of the letter</label>
            <textarea
              onChange={(e) => handleChange(e)}
              type="text"
              name="body"
              required
            />
          </div>
          <div className="form-label">
            <label htmlFor="status">Documents (If any)</label>
            <input onChange={(e) => handleChange(e)} type="file" name="body" />
          </div>
          <div className="form-label">
            <input type="submit" value="Next" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page2;
