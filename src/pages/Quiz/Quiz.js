import Heading from "../../ui/Heading/Heading";
import SvgImage from "../../ui/SvgImage/SvgImage";
import styles from "./Quiz.module.css";
import QuizSvg from "../../Store/SVG/quizSvg.svg";
import Button from "../../ui/Button/Button";
import { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [questionCounter, setQuestionCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const buttonClickHandler = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prevState) => prevState + 1);
    }
    if (questionCounter < questions.length - 1) {
      setQuestionCounter((prevState) => prevState + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetHandler = () => {
    setQuestionCounter(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <>
      <Heading>Quiz is coming soon...</Heading>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          <SvgImage src={QuizSvg} alt="quiz_image" />
        </div>
        <div className={styles.flexChild}>
          <div className={styles.rightContainer}>
            {showScore ? (
              <>
                <h2 className={styles.quizText}>
                  You scored {score} out of {questions.length}
                </h2>
                <Button className={styles.resetBtn} onClick={resetHandler}>
                  Start Over
                </Button>
              </>
            ) : (
              <>
                <div className={styles.flexChild}>
                  <h2 className={styles.quizText}>
                    Question {1 + questionCounter}/{questions.length}
                  </h2>
                  <p className={styles.quizText}>
                    {questions[questionCounter].questionText}
                  </p>
                </div>
                <div className={styles.flexChild}>
                  {questions[questionCounter].answerOptions.map((option) => (
                    <Button
                    key={option.answerText}
                      className={styles.choice}
                      onClick={() => buttonClickHandler(option.isCorrect)}
                    >
                      {option.answerText}
                    </Button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
