import "./Dashboard.css";
import person from "../../imgs/person.png";
import Records from "../HoD Records/Records";
import logo from "../../imgs/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const fetchData = async () => {
  const id = localStorage.getItem("id");
  try {
    const response = await axios.get(
      `https://ups-api-f0me.onrender.com/hod/${id}`
    );
    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header>
        <img src={logo} alt="" />
        <div className="links">
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            LogOut
          </button>{" "}
        </div>
      </header>
      <div className="dashboard-container">
        <div className="page2">
          <h1 className="heading">DashBoard</h1>
          <div className="person">
            <img src={person} alt="" />
            <div className="details">
              <form>
                <div className="formLabel">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="formInput"
                    value={data?.name || ""}
                    readOnly
                  />
                </div>
                <div className="formLabel">
                  <label htmlFor="id">User ID</label>
                  <input
                    type="text"
                    value={data?.rollNo || ""}
                    id="id"
                    className="formInput"
                    readOnly
                  />
                </div>
                <div className="formLabel">
                  <label htmlFor="dept">Department</label>
                  <input
                    type="text"
                    value={data?.dept || ""}
                    id="dept"
                    className="formInput"
                    readOnly
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="page1">
          <h1 className="heading">Permission Requests</h1>
          {data?.permissionRecords.map((element) => (
            <Records key={element.id} data={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
