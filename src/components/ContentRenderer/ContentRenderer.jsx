import CodeBlock from '../CodeBlock/CodeBlock';
import InterviewCard from '../InterviewCard/InterviewCard';
import TrickyPointCard from '../TrickyPointCard/TrickyPointCard';
import SectionLabel from '../SectionLabel/SectionLabel';
import styles from './ContentRenderer.module.css';

const ContentRenderer = ({ topic }) => {
  if (!topic) return null;

  return (
    <article className={styles.content} id={`topic-${topic.id}`}>
      {/* Topic Title */}
      <h2 className={styles.topicTitle}>{topic.title}</h2>

      {/* Content Sections */}
      {topic.content?.map((section, idx) => {
        switch (section.type) {
          case 'explanation':
            return (
              <div key={idx} className={styles.explanationBlock}>
                {section.heading && (
                  <h3 className={styles.sectionHeading}>{section.heading}</h3>
                )}
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className={styles.paragraph}>{p}</p>
                ))}
              </div>
            );

          case 'code':
            return (
              <CodeBlock
                key={idx}
                code={section.code}
                language={section.language || 'java'}
                title={section.title}
              />
            );

          case 'keyPoints':
            return (
              <div key={idx} className={styles.keyPointsBlock}>
                <div className={styles.keyPointsHeader}>
                  <span className={styles.keyPointsIcon}>💡</span>
                  <span className={styles.keyPointsLabel}>KEY POINTS</span>
                </div>
                <ul className={styles.keyPointsList}>
                  {section.points?.map((point, i) => (
                    <li key={i} className={styles.keyPoint}>{point}</li>
                  ))}
                </ul>
              </div>
            );

          case 'diagram':
            return (
              <div key={idx} className={styles.diagramBlock}>
                {section.title && (
                  <h3 className={styles.sectionHeading}>{section.title}</h3>
                )}
                <div className={styles.diagramLayers}>
                  {section.layers?.map((layer, i) => (
                    <div key={i}>
                      <div
                        className={styles.diagramLayer}
                        style={{
                          background: `linear-gradient(135deg, ${layer.color}15, ${layer.color}08)`,
                          borderColor: `${layer.color}30`
                        }}
                      >
                        <span className={styles.layerIcon}>{layer.icon}</span>
                        <div className={styles.layerInfo}>
                          <span className={styles.layerTitle}>{layer.title}</span>
                          <span className={styles.layerDesc} style={{ color: layer.color }}>
                            {layer.description}
                          </span>
                        </div>
                      </div>
                      {i < section.layers.length - 1 && (
                        <div className={styles.connector}>▼ ▼ ▼</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );

          case 'table':
            return (
              <div key={idx} className={styles.tableBlock}>
                {section.title && (
                  <h3 className={styles.sectionHeading}>{section.title}</h3>
                )}
                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        {section.headers?.map((h, i) => (
                          <th key={i} className={styles.tableHeader}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows?.map((row, i) => (
                        <tr key={i} className={styles.tableRow}>
                          {row.map((cell, j) => (
                            <td key={j} className={styles.tableCell}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );

          default:
            return null;
        }
      })}

      {/* Interview Questions Section */}
      {topic.interviewQuestions?.length > 0 && (
        <div className={styles.interviewSection}>
          <SectionLabel text="INTERVIEW QUESTIONS" />
          <h3 className={styles.sectionHeading}>Frequently Asked in Interviews</h3>
          <div className={styles.interviewList}>
            {topic.interviewQuestions.map((q, i) => (
              <InterviewCard key={i} question={q.question} answer={q.answer} />
            ))}
          </div>
        </div>
      )}

      {/* Tricky Points Section */}
      {topic.trickyPoints?.length > 0 && (
        <div className={styles.trickySection}>
          <SectionLabel text="TRICKY POINTS & GOTCHAS" />
          <h3 className={styles.sectionHeading}>Where Developers Slip Up</h3>
          <div className={styles.trickyList}>
            {topic.trickyPoints.map((tp, i) => (
              <TrickyPointCard
                key={i}
                title={tp.title}
                mistake={tp.mistake}
                correct={tp.correct}
                codeExample={tp.codeExample}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default ContentRenderer;
