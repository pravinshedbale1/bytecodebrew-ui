import { useNavigate } from 'react-router-dom';
import styles from './TopicTile.module.css';

const TopicTile = ({ topic }) => {
  const navigate = useNavigate();
  const {
    id,
    icon,
    title,
    description,
    category,
    color,
    tags,
    status,
  } = topic;

  const tileStyle = {
    '--tile-color': color,
    '--tile-glow': `${color}15`,
  };

  const iconBg = {
    background: `${color}18`,
  };

  const categoryStyle = {
    color: color,
    background: `${color}15`,
    border: `1px solid ${color}25`,
  };

  const handleClick = () => {
    if (status === 'live') {
      navigate(`/${id}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className={`${styles.tile} ${status === 'coming' ? styles.tileDisabled : ''}`}
      style={tileStyle}
      id={`topic-tile-${id}`}
      role="link"
      tabIndex={0}
      aria-label={status === 'live' ? `Explore ${title}` : `${title} — Coming Soon`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {/* Top bar gradient via inline style injection */}
      <style>{`
        #topic-tile-${id}::before {
          background: linear-gradient(90deg, ${color}, ${color}88) !important;
        }
      `}</style>

      <div className={styles.tileHeader}>
        <div className={styles.iconWrapper} style={iconBg} aria-hidden="true">
          {icon}
        </div>
        <span className={styles.tileCategory} style={categoryStyle}>
          {category}
        </span>
      </div>

      <div className={styles.tileBody}>
        <h3 className={styles.tileTitle}>{title}</h3>
        <p className={styles.tileDescription}>{description}</p>
      </div>

      <div className={styles.tileFooter}>
        <div className={styles.tileTags}>
          {status === 'live' && (
            <span className={styles.statusLabel}>
              <span className={`${styles.statusDot} ${styles['statusDot--live']}`} />
              Live
            </span>
          )}
          {status === 'coming' && (
            <span className={styles.statusLabel}>
              <span className={`${styles.statusDot} ${styles['statusDot--coming']}`} />
              Coming Soon
            </span>
          )}
          {tags?.map((tag) => (
            <span key={tag} className={styles.tileTag}>{tag}</span>
          ))}
        </div>
        <span className={styles.tileArrow} aria-hidden="true">→</span>
      </div>
    </article>
  );
};

export default TopicTile;
