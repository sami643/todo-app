import "./Nav.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">Logo</h3>

        <ul
          className={ "nav-links"}

        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/profile"><li>Profile</li> </Link>
          <Link to="/history" className="services">
            <li>Task History</li>
          </Link>
          <Link to="/signout" className="skills">
            <li>Sign Out</li>
          </Link>
        </ul>
        {/* 

        */}
        {/* <button
          className="mobile-menu-icon"
          onClick={() => setMobile(!Mobile)}
        ></button> */}
      </nav>
    </>
  );
};
export default NavBar;
