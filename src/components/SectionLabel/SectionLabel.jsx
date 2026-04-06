import styles from './SectionLabel.module.css';

const SectionLabel = ({ text }) => {
  return (
    <div className={styles.sectionLabel} aria-hidden="true">
      <span className={styles.sectionLine} />
      <span className={styles.sectionText}>{text}</span>
    </div>
  );
};

export default SectionLabel;
