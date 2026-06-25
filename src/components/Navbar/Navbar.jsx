import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>STUDENT DASHBOARD</div>

      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Students
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
