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
      {/* --- Atmospheric Glow Orbs --- */}
      <div className={styles.orbOrange1} aria-hidden="true" />
      <div className={styles.orbPurple} aria-hidden="true" />
      <div className={styles.orbBlue} aria-hidden="true" />
      <div className={styles.orbOrange2} aria-hidden="true" />

      {/* --- Hero Section --- */}
      <section className={styles.hero} id="hero-section" aria-labelledby="hero-title">
        <div className={styles.heroStatus}>
          <span className={styles.heroDot} aria-hidden="true" />
          <span className={styles.heroStatusText}>{hero.status.text}</span>
        </div>

        <h1 id="hero-title" className={styles.heroTitle}>
          {hero.title}
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
