import styles from "./Input.module.css";

const Input = (props, { innerRef }) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      types={props.type}
      id={props.id}
      className={`${styles.input} ${props.className}`}
      ref={props.innerRef}
      onChange={props.onChange}
    />
  );
};

export default Input;
