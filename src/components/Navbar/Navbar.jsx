import { Link } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/Logo.png";
import Search from "../Search/Search.jsx";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="Qtify" />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;