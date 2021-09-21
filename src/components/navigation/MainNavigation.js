import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Kiddy Math</h1>
      </div>
      <ul>
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">Table</a>
        </li>
        <li>
          <a href="#!">Quiz</a>
        </li>
        <li>
          <a href="#!">Contact Us</a>
        </li>
        <li>
          <a href="#!">Sign Up</a>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
