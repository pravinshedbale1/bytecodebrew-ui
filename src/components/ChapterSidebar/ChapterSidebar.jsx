import { useState } from 'react';
import styles from './ChapterSidebar.module.css';

const ChapterSidebar = ({ chapters, activeTopicId, onTopicSelect, mobileOpen, onMobileClose }) => {
  const [expandedChapter, setExpandedChapter] = useState(
    // Auto-expand the chapter containing the active topic
    chapters.findIndex(ch => ch.topics.some(t => t.id === activeTopicId)) || 0
  );

  const handleChapterClick = (index) => {
    setExpandedChapter(expandedChapter === index ? -1 : index);
  };

  const handleTopicClick = (topicId) => {
    onTopicSelect(topicId);
    if (onMobileClose) onMobileClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={onMobileClose} aria-hidden="true" />
      )}

      <aside
        className={`${styles.sidebar} ${mobileOpen ? styles.sidebarOpen : ''}`}
        aria-label="Chapter navigation"
      >
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarIcon}>☕</span>
          <div>
            <div className={styles.sidebarTitle}>Java</div>
            <div className={styles.sidebarSubtitle}>Mastery Path</div>
          </div>
          {mobileOpen && (
            <button className={styles.closeBtn} onClick={onMobileClose} aria-label="Close navigation">
              ×
            </button>
          )}
        </div>

        <nav className={styles.chapterList}>
          {chapters.map((chapter, index) => (
            <div key={chapter.id} className={styles.chapterGroup}>
              <button
                className={`${styles.chapterBtn} ${expandedChapter === index ? styles.chapterBtnActive : ''}`}
                onClick={() => handleChapterClick(index)}
                aria-expanded={expandedChapter === index}
              >
                <span className={styles.chapterNumber}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.chapterName}>{chapter.title}</span>
                <span className={`${styles.chapterArrow} ${expandedChapter === index ? styles.chapterArrowOpen : ''}`}>
                  ›
                </span>
              </button>

              {expandedChapter === index && (
                <div className={styles.topicList}>
                  {chapter.topics.map((topic) => (
                    <button
                      key={topic.id}
                      className={`${styles.topicBtn} ${activeTopicId === topic.id ? styles.topicBtnActive : ''}`}
                      onClick={() => handleTopicClick(topic.id)}
                    >
                      <span className={styles.topicDot} />
                      <span className={styles.topicName}>{topic.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.progressLabel}>
            {chapters.reduce((acc, ch) => acc + ch.topics.length, 0)} Topics
          </div>
        </div>
      </aside>
    </>
  );
};

export default ChapterSidebar;
