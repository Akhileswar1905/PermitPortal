import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { uploadFile } from "../../lib/utils";

const Page2 = () => {
  const location = useLocation();
  const data = location.state.user;
  const navigate = useNavigate();
  const [form, setForm] = useState(data);
  const [req, setReq] = useState({});
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleChange = async (e) => {
    if (e.target.name === "docs") {
      setUploaded(true);
      uploadFile(e.target.files[0])
        .then((url) => {
          console.log(url);
          setReq({
            ...req,
            docs: url,
          });
          setUploaded(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
      return;
    }
    setReq({ ...req, [e.target.name]: e.target.value });
    console.log(req);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <form onSubmit={handleSubmit}>
          <h3>Permission Details</h3>
          <div className="form-label">
            <label htmlFor="date">Date</label>
            <input
              onChange={handleChange}
              type="date"
              name="date"
              id="date"
              required
            />
          </div>
          <div className="form-label">
            <label htmlFor="reason">Subject</label>
            <input
              onChange={handleChange}
              type="text"
              name="subject"
              required
            />
          </div>
          <div className="form-label">
            <label htmlFor="body">Body of the letter</label>
            <textarea onChange={handleChange} name="body" required />
          </div>
          <div className="form-label">
            <label htmlFor="docs">Documents (If any)</label>
            <input onChange={handleChange} type="file" name="docs" />
          </div>
          <div className="form-label">
            <input type="submit" value="Next" disabled={uploaded} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page2;
