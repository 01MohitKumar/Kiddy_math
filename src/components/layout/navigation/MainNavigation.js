import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Kiddy Math</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/table" activeClassName={styles.active}>
            Table
          </NavLink>
        </li>
        <li>
          <NavLink to="quiz" activeClassName={styles.active}>
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink to="contact-us" activeClassName={styles.active}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="signup-form" activeClassName={styles.active}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
