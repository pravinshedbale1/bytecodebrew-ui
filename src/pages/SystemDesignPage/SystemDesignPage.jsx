import { useState, useEffect, useMemo } from 'react';
import ChapterSidebar from '../../components/ChapterSidebar/ChapterSidebar';
import ContentRenderer from '../../components/ContentRenderer/ContentRenderer';
import chapters from '../../data/hld/chapters.json';
import chapter1Data from '../../data/hld/chapter1-fundamentals.json';
import chapter2Data from '../../data/hld/chapter2-advanced-concepts.json';
import chapter3Data from '../../data/hld/chapter3-solved-designs.json';
import styles from './SystemDesignPage.module.css';

const allTopics = [
  ...chapter1Data,
  ...chapter2Data,
  ...chapter3Data,
];

const SystemDesignPage = () => {
  const [activeTopicId, setActiveTopicId] = useState(chapters[0].topics[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeTopic = useMemo(
    () => allTopics.find(t => t.id === activeTopicId),
    [activeTopicId]
  );

  // Update document title
  useEffect(() => {
    const topicTitle = activeTopic?.title || 'System Design';
    document.title = `${topicTitle} — System Design | ByteCodeBrew`;
    return () => { document.title = 'ByteCodeBrew'; };
  }, [activeTopic]);

  // Scroll to top when topic changes
  useEffect(() => {
    const contentPane = document.getElementById('hld-content-pane');
    if (contentPane) contentPane.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [activeTopicId]);

  // Find chapter for active topic
  const activeChapter = useMemo(() => {
    for (const ch of chapters) {
      if (ch.topics.some(t => t.id === activeTopicId)) return ch;
    }
    return chapters[0];
  }, [activeTopicId]);

  // Navigation helpers
  const allTopicIds = useMemo(
    () => chapters.flatMap(ch => ch.topics.map(t => t.id)),
    []
  );

  const currentIndex = allTopicIds.indexOf(activeTopicId);
  const prevTopicId = currentIndex > 0 ? allTopicIds[currentIndex - 1] : null;
  const nextTopicId = currentIndex < allTopicIds.length - 1 ? allTopicIds[currentIndex + 1] : null;

  const getTopicTitle = (id) => {
    for (const ch of chapters) {
      const t = ch.topics.find(t => t.id === id);
      if (t) return t.title;
    }
    return '';
  };

  return (
    <div className={styles.page}>
      {/* SVG Triangle Decorations (v2 geometric system) */}
      <svg className={styles.triangleTop} viewBox="0 0 200 180" fill="none" aria-hidden="true">
        <polygon points="100,10 190,170 10,170" stroke="#4ADE80" strokeWidth="1" opacity="0.04" />
      </svg>
      <svg className={styles.triangleBottom} viewBox="0 0 200 180" fill="none" aria-hidden="true">
        <polygon points="100,10 190,170 10,170" stroke="#4ADE80" strokeWidth="1.5" opacity="0.03" />
      </svg>

      {/* Mobile header */}
      <div className={styles.mobileHeader}>
        <button
          className={styles.menuToggle}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open chapter navigation"
        >
          <span className={styles.menuIcon}>☰</span>
          <span className={styles.mobileChapter}>{activeChapter.title}</span>
        </button>
      </div>

      {/* Two-column layout */}
      <div className={styles.layout}>
        <ChapterSidebar
          chapters={chapters}
          activeTopicId={activeTopicId}
          onTopicSelect={setActiveTopicId}
          mobileOpen={sidebarOpen}
          onMobileClose={() => setSidebarOpen(false)}
        />

        <div className={styles.contentPane} id="hld-content-pane">
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbLink}>System Design</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{activeTopic?.title}</span>
          </div>

          {/* Chapter badge */}
          <div className={styles.chapterBadge}>
            <span className={styles.chapterBadgeIcon}>{activeChapter.icon}</span>
            <span className={styles.chapterBadgeText}>{activeChapter.title}</span>
          </div>

          {/* Topic content */}
          {activeTopic ? (
            <ContentRenderer topic={activeTopic} />
          ) : (
            <p className={styles.notFound}>Topic not found. Select one from the sidebar.</p>
          )}

          {/* Prev/Next navigation */}
          <div className={styles.navFooter}>
            {prevTopicId ? (
              <button
                className={styles.navBtn}
                onClick={() => setActiveTopicId(prevTopicId)}
              >
                <span className={styles.navBtnLabel}>← Previous</span>
                <span className={styles.navBtnTopic}>{getTopicTitle(prevTopicId)}</span>
              </button>
            ) : <div />}
            {nextTopicId ? (
              <button
                className={`${styles.navBtn} ${styles.navBtnNext}`}
                onClick={() => setActiveTopicId(nextTopicId)}
              >
                <span className={styles.navBtnLabel}>Next →</span>
                <span className={styles.navBtnTopic}>{getTopicTitle(nextTopicId)}</span>
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesignPage;
