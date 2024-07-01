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
import { useEffect } from "react";
import { getToken, messaging, onMessage } from "./firebase.js";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

function App() {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("Notification permission granted.");
          console.log(messaging);
          const token = await getToken(messaging, {
            vapidKey:
              "BKeYvL8bik2RcPJGN0M1eoq9mMXc8scwjg8ciBXjDPcuVFQAi352FOeJkZS447D8cI4xz-k7D9ChD_rfF1_bdl0",
          });
          console.log("Token:", token);
          localStorage.setItem("fcmtoken", token);
        } else {
          console.log("Notification permission denied.");
        }
      } catch (error) {
        console.error("Error getting token", error);
      }
    };

    requestPermission();

    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    });
  }, []);

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
