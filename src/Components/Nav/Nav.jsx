import "./Nav.css";
import logo from "../../imgs/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import bars from "../../imgs/bars.png";
import { useState } from "react";
const Nav = () => {
  const id = localStorage.getItem("id");
  const role = localStorage.getItem("role");
  const title = id ? "Get Permission" : "Get Started";
  const link = id ? "/perm" : "/login";
  const navigate = useNavigate();

  const [toggle, setToggle] = useState("none");

  const toggleEffect = () => {
    setToggle(toggle === "none" ? "inline-flex" : "none");
  };

  return (
    <div className="nav-container">
      <header>
        <div className="nav-logo">
          <Link to={!id ? "/" : "/dashboard"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="btns">
          {!id && <NavLink to="/">Home</NavLink>}
          {id && <Link to="/dashboard">Dashboard</Link>}
          {role === "staff" && (
            <Link to="/requests">
              Requests({localStorage.getItem("count")})
            </Link>
          )}
          <NavLink to="/about">About</NavLink>
          <Link className="link" to={link}>
            {title}
          </Link>
          {id && (
            <button
              className="logout"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              <span>Logout</span>
            </button>
          )}

        </div>
          <div className="toggleBtn">
            <img src={bars} alt="" onClick={toggleEffect} />
          </div>
      </header>
      <div className="dropdownMenu" style={{display:toggle}}>
      <div className="dropDown" >
              {!id && <NavLink to="/">Home</NavLink>}
              {id && <Link to="/dashboard">Dashboard</Link>}
              {role === "staff" && (
                <Link to="/requests">
                  Requests({localStorage.getItem("count")})
                </Link>
              )}
              <NavLink to="/about">About</NavLink>
              <Link className="link" to={link}>
                {title}
              </Link>
              {id && (
                <button
                  className="logout"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  <span>Logout</span>
                </button>
              )}
            </div>
      </div>
    </div>
  );
};

export default Nav;
