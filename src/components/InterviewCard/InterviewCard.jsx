import { useState } from 'react';
import styles from './InterviewCard.module.css';

const InterviewCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      onClick={() => setOpen(!open)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen(!open);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={open}
    >
      <div className={styles.questionRow}>
        <span className={styles.qIcon}>Q</span>
        <span className={styles.questionText}>{question}</span>
        <span className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}>+</span>
      </div>
      {open && (
        <div className={styles.answerSection}>
          <div className={styles.answerDivider} />
          <div className={styles.answerContent}>
            <span className={styles.aIcon}>A</span>
            <p className={styles.answerText}>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewCard;
