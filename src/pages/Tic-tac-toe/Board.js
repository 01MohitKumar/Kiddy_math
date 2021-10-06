import Square from "./Square";
import styles from "./Game.module.css";

const Board = () => {
  return (
    <div>
      <div>Next Player: X</div>
      <div className={styles.boardRow}>
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className={styles.boardRow}>
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className={styles.boardRow}>
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
};

export default Board;
