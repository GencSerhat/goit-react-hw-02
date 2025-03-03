import styles from "./Option.module.css"; // CSS module'ü import ettik
function Option({ onGood, onNeutral, onBad, onReset, total }) {
  return (
    <>
      <div className={styles.optionContainer}>
        <button onClick={onGood}>Good</button>
        <button onClick={onNeutral}>Neutral</button>
        <button onClick={onBad}>Bad</button>
        {total > 0 && <button onClick={onReset}>Reset</button>}
      </div>
    </>
  );
}
export default Option;
