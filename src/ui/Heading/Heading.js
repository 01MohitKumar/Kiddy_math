import styles from "./Heading.module.css";

const Heading = (props) => {
  return <h2 className={styles.heading}>{props.children}</h2>;
};

export default Heading;