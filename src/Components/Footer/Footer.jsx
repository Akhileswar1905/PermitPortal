import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="block">
        <h4>Account</h4>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
      <div className="flex">
        <div className="socialMedia-Me">
          <h4>Developer</h4>
          <div className="socialMedia">
            {/* <a href="https://www.instagram.com/urs_akhileswar"> */}
            <FaSquareInstagram />
            {/* </a> */}
            {/* <a href="https://www.linkedin.com/in/sathivada-akhileswar-243b66237/"> */}
            <FaLinkedin />
            {/* </a> */}
            {/* <a href="https://github.com/Akhileswar1905"> */}
            <IoLogoGithub />
            {/* </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
