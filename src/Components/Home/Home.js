import "./Home.css";
import logo from "../../imgs/logo.png";
import image1 from "../../imgs/image1.png";
import image2 from "../../imgs/image2.png";
import { Link } from "react-router-dom";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
const Home = () => {
  return (
    <>
      <header>
        <img src={logo} alt="" />
        {/* <p>University Permission System</p> */}
      </header>
      <div className="home-container home-page1">
        <div className="home-section1">
          <h1 className="home-heading">
            Navigate your college Permissions, Easy and Quick
          </h1>
          <Link to={"/login"} className="getStarted">
            <button>Get Started! </button>
          </Link>
        </div>
        <div className="home-section2">
          <img src={image1} alt="" />
        </div>
      </div>

      <div className="home-page2">
        <h1 className="heading">Welcome Aboard</h1>
        <p>
          Introducing the Permission System: Seamlessly manage and streamline
          access control within Gokaraju Rangaraju Institute of Engineering and
          Technology. Our intuitive web platform empowers administrators to
          efficiently grant and oversee permissions, ensuring a secure and
          organized environment for students, faculty, and staff.
        </p>
        <Link to={"/login"} className="getStarted2">
          <button>{/* <span></span> */}</button>
        </Link>
      </div>

      <div className="home-page3">
        <div className="section3">
          <img src={image2} alt="" />
        </div>
        <div className="section4">
          <h1 className="heading">How it works?</h1>
          <p>
            The Permission System is a web platform that allows administrators
            to manage and streamline access control within your college. Our
            intuitive web platform empowers administrators to efficiently grant
            and oversee permissions, ensuring a secure and organized environment
            for students, faculty, and staff.
          </p>
        </div>
      </div>
      <footer>
        <div className="block">
          <h4>Account</h4>
          <Link to={"/login"}>Login</Link>
          <Link to={"/regstu"}>Student Register</Link>
          <Link to={"/regfac"}>Faculty Register</Link>
          <Link to={"/reghod"}>HoD Register</Link>
        </div>
        {/* <div className="block">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Contact</p>
          <p>Feedback</p>
        </div> */}
        <div className="flex">
          <div className="socialMedia-Me">
            <h4>Developer</h4>
            <div className="socialMedia">
              <a href="https://www.instagram.com/urs_akhileswar">
                <FaSquareInstagram />
              </a>
              <a href="https://www.linkedin.com/in/sathivada-akhileswar-243b66237/">
                <IoLogoGithub />
              </a>
              <a href="https://github.com/Akhileswar1905">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
