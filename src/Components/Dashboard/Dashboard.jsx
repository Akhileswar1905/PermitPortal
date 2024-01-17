import { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import MyVerticallyCenteredModal from "./Modal";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const id = localStorage.getItem("id");
      const data = await axios.get(`http://localhost:8000/user/${id}`);
      setUser(data.data.user);
    };
    fetchUser();
  }, []);

  const handleModelClick = (record) => {
    console.log(record.id);
    setSelectedRecord(record);
  };

  const handleCloseModal = () => {
    setSelectedRecord(null);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h1 className="dashboard-title">Welcome, {user?.name}</h1>
        <div className="dashboard-links">
          <form>
            <div className="form-label">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={user?.name} readOnly />
            </div>
            <div className="form-label">
              <label htmlFor="rollNo">Roll Number</label>
              <input type="text" id="rollNo" value={user?.rollNo} readOnly />
            </div>
            <div className="form-label">
              <label htmlFor="dept">Department</label>
              <input type="text" id="dept" value={user?.department} readOnly />
            </div>
          </form>
        </div>
      </div>

<div className="hero">
<h1>Your Permission Requests</h1>

      <div className="main-page">
        {user?.permissionRecords.map((record) => (
          <div key={record.id} className="model" onClick={() => handleModelClick(record)}>
            {record.subject} - {record.date}
          </div>
        ))}

        {selectedRecord && (
          <MyVerticallyCenteredModal
          show={true}
          onHide={handleCloseModal}
          record={selectedRecord}
          />
          )}
      </div>
          </div>
    </div>
  );
};

export default Dashboard;
