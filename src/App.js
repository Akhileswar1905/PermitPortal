import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegFac from "./Components/Registration/RegFac.jsx";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login.jsx";
import RegStud from "./Components/Registration/RegStd";
import Reg from "./Components/Registration/Reg.jsx";
import Navigation from "./Components/Nav/Nav.jsx";
import Page1 from "./Components/Permission/Page1.jsx";
import Page2 from "./Components/Permission/Page2.jsx";
import Page3 from "./Components/Permission/Page3.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Requests from "./Components/Requests/Requests.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/regstud" element={<RegStud />} />
        <Route path="/regfac" element={<RegFac />} />
        <Route path="/perm" element={<Page1 />} />
        <Route path="/perm2" element={<Page2 />} />
        <Route path="/perm3" element={<Page3 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </>
  );
}

export default App;
