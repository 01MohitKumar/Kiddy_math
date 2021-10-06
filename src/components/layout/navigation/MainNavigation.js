import { useContext } from "react";

import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../Store/context/auth-context";
import Button from "../../../ui/Button/Button";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Kiddy Math</h1>
      </div>
      <ul>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/" exact activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
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
              <NavLink to="game" activeClassName={styles.active}>
                Game
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="leaderboard" activeClassName={styles.active}>
                Leaderboard
              </NavLink>
            </li> */}
            <li>
              <NavLink to="contact-us" activeClassName={styles.active}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <Button
                onClick={() => {
                  authCtx.logout();
                }}
                className={styles.btn}
              >
                Logout
              </Button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default MainNavigation;
