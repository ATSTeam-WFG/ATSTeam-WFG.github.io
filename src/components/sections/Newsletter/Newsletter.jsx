import { useState } from 'react'
import newsletters from '../../../data/newsletters/index.js'
import RevealWrapper from '../../shared/RevealWrapper'
import styles from './Newsletter.module.css'

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function NewsletterSection({ section }) {
  if (section.type === 'highlight') {
    return (
      <div className={styles.highlight}>
        <div className={styles.highlightStat}>{section.stat}</div>
        <div className={styles.highlightLabel}>{section.label}</div>
      </div>
    )
  }
  if (section.type === 'video') {
    return (
      <div className={styles.videoThumb}>
        <div className={styles.videoPlaceholder}>▶ {section.caption}</div>
      </div>
    )
  }
  return (
    <div className={styles.contentSection}>
      {section.heading && <div className={styles.sectionHeading}>{section.heading}</div>}
      <p className={styles.sectionBody}>{section.body}</p>
    </div>
  )
}

export default function Newsletter() {
  const [expanded, setExpanded] = useState(null)

  if (!newsletters.length) return null

  const [featured, ...archive] = newsletters

  return (
    <section className={styles.wrapper} id="newsletter">
      <div className={styles.inner}>
        <RevealWrapper><div className="section-tag">ATS Newsletter · Bi-Weekly Intelligence</div></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2>The <span className="accent">ATS Newsletter.</span><br />Delivered <span className="gold">Bi-Weekly.</span></h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="lead">AI education, fraud awareness, and field intelligence — distributed to 1,744+ agents and the full WFG network every two weeks. Team members can add new issues directly to this page.</p>
        </RevealWrapper>

        {/* Featured Issue */}
        <RevealWrapper delay={0.3}>
          <div className={styles.featured}>
            <div className={styles.featuredMeta}>
              <span className={styles.editionBadge}>Edition #{featured.edition}</span>
              <span className={styles.date}>{formatDate(featured.date)}</span>
              <span className={styles.authorBy}>by {featured.author}</span>
            </div>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredSummary}>{featured.summary}</p>
            <div className={styles.tags}>
              {featured.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>

            {/* Sections */}
            <div className={styles.sections}>
              {featured.sections.map((s, i) => (
                <NewsletterSection key={i} section={s} />
              ))}
            </div>

            {featured.externalUrl && (
              <a href={featured.externalUrl} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
                Read full issue →
              </a>
            )}
          </div>
        </RevealWrapper>

        {/* Archive */}
        {archive.length > 0 && (
          <RevealWrapper delay={0.4}>
            <div className={styles.archiveHeader}>Past Issues</div>
            <div className={styles.archive}>
              {archive.map((issue) => (
                <div key={issue.id} className={styles.archiveItem}>
                  <div className={styles.archiveLeft}>
                    <div className={styles.archiveEdition}>#{issue.edition}</div>
                    <div>
                      <div className={styles.archiveTitle}
                        onClick={() => setExpanded(expanded === issue.id ? null : issue.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {issue.title}
                      </div>
                      <div className={styles.archiveMeta}>{formatDate(issue.date)} · {issue.author}</div>
                      {expanded === issue.id && (
                        <p className={styles.archiveSummary}>{issue.summary}</p>
                      )}
                    </div>
                  </div>
                  <div className={styles.archiveTags}>
                    {issue.tags.slice(0, 2).map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}
