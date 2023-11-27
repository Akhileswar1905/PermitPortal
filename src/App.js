import "./App.css";
import { Route, Routes } from "react-router-dom";
import Records from "./Components/Records/Records";
import RegFac from "./Components/Reg2/RegFac";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import RegStud from "./Components/Reg/RegStud";
import Permission from "./Components/Permission/Permission";
import Dashboard from "./Components/Faculty Dashboard/Dashboard.js";
import HodDashboard from "./Components/HoD Dashboard/Dashboard.js";
import StuDashboard from "./Components/Student Dashboard/Dashboard.js";
import RegHod from "./Components/Reg3/RegHod.js";
function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <RegStud></RegStud> */}
      {/* <RegFac></RegFac> */}
      {/* <Permission /> */}
      {/* <StuDashboard /> */}
      {/* <Dashboard /> */}
      {/* <Records /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regstud" element={<RegStud />} />
        <Route path="/regfac" element={<RegFac />} />
        <Route path="/reghod" element={<RegHod />} />
        <Route path="/permission" element={<Permission />} />
        <Route path="/stuDashboard" element={<StuDashboard />} />
        <Route path="/facDashboard" element={<Dashboard />} />
        <Route path="/hodDashboard" element={<HodDashboard />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </>
  );
}

export default App;
