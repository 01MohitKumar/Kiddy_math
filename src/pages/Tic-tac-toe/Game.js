import Board from "./Board";
import styles from "./Game.module.css";

const Game = () => {
  return (
    <div className={styles.game}>
      <div className={styles.boardRow}>
        <Board />
      </div>
    </div>
  );
};

export default Game;
