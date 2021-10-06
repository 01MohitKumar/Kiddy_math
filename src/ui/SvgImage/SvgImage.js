import styles from "./SvgImage.module.css";

const SvgImage = (props) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={props.src} alt={props.alt} />
    </div>
  );
};

export default SvgImage;
