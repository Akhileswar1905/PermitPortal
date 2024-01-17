import { useEffect, useState } from "react";
import './Requests.css'
import Model from "./Modal";
import axios from "axios";
const Requests = () => {
  const [user, setUser] = useState(null);
  const id = localStorage.getItem("id");
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:8000/user/${id}`);
      setUser(response.data.user);
    };
    fetchUser();
  });
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="request" >
      <h1>Requests</h1>
      {user &&
        user.permissionRequests.map((record) => (
          <>
            <div key={record.id} className="model" onClick={() => setModalShow(true)}>
              {record.subject} - {record.date}
            </div>
            <Model
              show={modalShow}
              onHide={() => setModalShow(false)}
              record={record}
            />
          </>
        ))}
    </div>
  );
};

export default Requests;
