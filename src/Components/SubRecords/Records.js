import Accordion from "react-bootstrap/Accordion";
import "./Records.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Records(props) {
  const { data } = props;
  const navigate = useNavigate();
  const handleAccept = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const id = data._id;
      const response = await axios.put(
        `http://127.0.0.1:8000/student/granted/${id}`,
        data
      );
      console.log(response);
      navigate("/facDashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const id = data._id;
      const response = await axios.put(
        `http://127.0.0.1:8000/student/rejected/${id}`,
        data
      );
      console.log(response);
      navigate("/facDashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleForward = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const id = data._id;
      const response = await axios.put(
        `http://127.0.0.1:8000/student/fowarded/${id}`,
        data
      );
      console.log(response);
      navigate("/facDashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Accordion>
      <Accordion.Item className="item" eventKey={data.id}>
        <Accordion.Header>
          <p>Permission Subject: {data.subject}</p>
        </Accordion.Header>
        <Accordion.Body>
          <p>Permission Letter: {data.permissionLetter}</p>
          <p>Documents: {data?.documents}</p>
          <p>Status: {data.status}</p>
          {data.status === "pending" && (
            <>
              <div className="btns m-2">
                <button
                  className="btn btn-success m-1"
                  onClick={(e) => handleAccept(e)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={(e) => handleReject(e)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-warning m-1"
                  onClick={(e) => handleForward(e)}
                >
                  Forwarded to HoD
                </button>
              </div>
            </>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Records;
