import styles from './Input.module.css'

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      types={props.type}
      id={props.id}
      className={`${styles.input} ${props.className}`}
    />
  );
};

export default Input;
