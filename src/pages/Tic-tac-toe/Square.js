import styles from './Game.module.css'

const Square = (props) => {
  return <button className={styles.square} onClick={()=>console.log('clicked!')}>{props.value}</button>;
};

export default Square;
