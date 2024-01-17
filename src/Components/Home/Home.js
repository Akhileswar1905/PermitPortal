import "./Home.css";
import image1 from "../../imgs/image1.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const Home = () => {
  const id = localStorage.getItem("id");
  const link = id ? "/perm" : "/login";
  const text = id ? "Get Permission" : "Get Started";
  return (
    <>
      <div className="home-container home-page1">
        <div className="home-section1">
          <h1 className="home-heading">Hey There!</h1>
          <h3>Welcome to PermitPortal !!</h3>
          <p>
            where we're flipping the script on permissions! Say goodbye to
            paperwork headaches and hello to hassle-free requests. Just kick
            back, grab your favorite cup of coffee, and effortlessly send your
            permission requests to the right faculty. Permission hassles, meet
            your match!
          </p>
          <Link to={link} className="getStarted">
            <button>{text}</button>
          </Link>
        </div>
        <div className="home-section2">
          <img src={image1} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
