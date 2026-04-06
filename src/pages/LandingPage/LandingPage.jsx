import SectionLabel from '../../components/SectionLabel/SectionLabel';
import TopicTile from '../../components/TopicTile/TopicTile';
import useScrollReveal from '../../hooks/useScrollReveal';
import topics from '../../data/topics.json';
import hero from '../../data/hero.json';
import brand from '../../data/brand.json';
import landing from '../../data/landing.json';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const [topicsRef, topicsVisible] = useScrollReveal({ threshold: 0.08 });

  return (
    <div className={styles.page}>
      {/* --- SVG Triangle Decorations (v2 geometric system) --- */}
      <svg className={styles.triangleLarge} viewBox="0 0 200 180" fill="none" aria-hidden="true">
        <polygon points="100,10 190,170 10,170" stroke="#4ADE80" strokeWidth="1" opacity="0.05" />
      </svg>
      <svg className={styles.triangleMedium} viewBox="0 0 160 140" fill="none" aria-hidden="true">
        <polygon points="80,8 152,132 8,132" fill="#4ADE80" opacity="0.08" />
      </svg>
      <svg className={styles.triangleSmall} viewBox="0 0 200 180" fill="none" aria-hidden="true">
        <polygon points="100,10 190,170 10,170" stroke="#4ADE80" strokeWidth="1.5" opacity="0.04" />
      </svg>

      {/* --- Ambient Glow (radial gradient, not filter:blur) --- */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* --- Hero Section --- */}
      <section className={styles.hero} id="hero-section" aria-labelledby="hero-title">
        <div className={styles.heroStatus}>
          <span className={styles.heroDot} aria-hidden="true" />
          <span className={styles.heroStatusText}>{hero.status.text}</span>
        </div>

        <h1 id="hero-title" className={styles.heroTitle}>
          Master Software{' '}
          <span className={styles.accent}>Engineering.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          {hero.subtitle}
        </p>

        <div className={styles.heroStats} role="list" aria-label="Platform statistics">
          {hero.stats.map((stat) => (
            <div key={stat.label} className={styles.statBox} role="listitem">
              <div className={styles.statValue} style={{ color: stat.color }}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Hero Brand Footer --- */}
      <div className={styles.brandClose} aria-hidden="true">
        <div className={styles.brandCloseName}>{brand.name}</div>
        <div className={styles.brandCloseTagline}>{brand.tagline}</div>
      </div>

      {/* --- Topics Section --- */}
      <section
        ref={topicsRef}
        className={`${styles.topicsSection} ${topicsVisible ? styles.sectionVisible : styles.sectionHidden}`}
        id="topics-section"
        aria-labelledby="topics-title"
      >
        <SectionLabel text={landing.topicsSection.label} />
        <h2 id="topics-title" className={styles.sectionTitle}>
          {landing.topicsSection.title}
        </h2>
        <p className={styles.sectionSubtitle}>
          {landing.topicsSection.subtitle}
        </p>

        <div className={styles.topicsGrid} role="list" aria-label="Available topics">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              role="listitem"
              className={`${topicsVisible ? styles.tileEntrance : ''} ${styles[`tileDelay${index}`] || ''}`}
            >
              <TopicTile topic={topic} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
