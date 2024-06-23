import { useEffect, useState } from "react";
import "./Requests.css";
import Model from "./Modal";
import axios from "axios";

const Requests = () => {
  const [user, setUser] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `https://permission-system-api.onrender.com/user/${id}`
      );
      setUser(response.data.user);
    };
    fetchUser();
  }, [id]);

  const handleRecordClick = (record) => {
    setSelectedRecord(record);
    setModalShow(true);
  };

  return (
    <div className="request">
      <h1>Requests</h1>
      {user &&
        user.permissionRequests.map((record) => (
          <div
            key={record._id}
            className="model"
            onClick={() => handleRecordClick(record)}
          >
            {record.subject} - {record.date}
          </div>
        ))}
      <Model
        show={modalShow}
        onHide={() => setModalShow(false)}
        record={selectedRecord}
      />
    </div>
  );
};

export default Requests;
