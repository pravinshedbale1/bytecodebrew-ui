import styles from './TrickyPointCard.module.css';

const TrickyPointCard = ({ title, mistake, correct, codeExample }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>⚠️</span>
        <span className={styles.label}>TRICKY POINT</span>
      </div>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>
          <span className={styles.crossIcon}>✗</span> Common Mistake
        </span>
        <p className={styles.mistakeText}>{mistake}</p>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>
          <span className={styles.checkIcon}>✓</span> Correct Approach
        </span>
        <p className={styles.correctText}>{correct}</p>
      </div>

      {codeExample && (
        <pre className={styles.codeSnippet}>
          <code>{codeExample}</code>
        </pre>
      )}
    </div>
  );
};

export default TrickyPointCard;
