import { useState, useEffect } from "react";
import styles from "./Feedback.module.css"; // CSS module'ü import ettik
import Option from "./options/Option";

function Feedback() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0, total: 0 };
  });

  useEffect(() => {
    // feedback state'i değiştiğinde localStorage'a kaydet
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateGood = () => {
    setFeedback((prev) => ({
      ...prev,
      good: feedback.good + 1,
      total: feedback.total + 1,
    }));
  };
  const updateNeutral = () => {
    setFeedback((prev) => ({
      ...prev,
      neutral: feedback.neutral + 1,
      total: feedback.total + 1,
    }));
  };
  const updateBad = () => {
    setFeedback((prev) => ({
      ...prev,
      bad: feedback.bad + 1,
      total: feedback.total + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
    });
  };
  const positive = feedback.total > 0 
  ? ((feedback.good / feedback.total) * 100).toFixed(1) 
  : 0; // Eğer total 0 ise NaN olmaması için 0 ata

  return (
    <>
    <div className="className={styles.container}">

   
      <Option
        onGood={updateGood}
        onNeutral={updateNeutral}
        onBad={updateBad}
        onReset={resetFeedback}
        total={feedback.total}
      />
      <div className={styles.stats}>
        <p>Good:{feedback.good}</p>
        <p>Neutral:{feedback.neutral}</p>
        <p>Bad:{feedback.bad}</p>
        <p>Total:{feedback.total}</p>
        <p className={styles.positive}>Positive: {positive}%</p>
      </div>
      </div>
    </>
  );
}
export default Feedback;
