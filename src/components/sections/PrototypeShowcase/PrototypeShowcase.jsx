import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import RevealWrapper from '../../shared/RevealWrapper'
import prototypes from '../../../data/prototypes.json'
import styles from './PrototypeShowcase.module.css'

const STATUS_LABEL = {
  live: { label: 'Live', color: 'var(--teal)', bg: 'rgba(0,200,180,.1)', border: 'rgba(0,200,180,.25)' },
  'in-progress': { label: 'In Progress', color: 'var(--gold)', bg: 'rgba(245,166,35,.1)', border: 'rgba(245,166,35,.25)' },
}

export default function PrototypeShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className={styles.wrapper} id="prototypes">
      <div className={styles.inner}>
        <RevealWrapper><div className="section-tag">Work We've Built</div></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <div className={styles.header}>
            <h2>Prototypes &amp; <span className="accent">Products.</span></h2>
            <div className={styles.controls}>
              <button onClick={scrollPrev} className={styles.arrow} aria-label="Previous">←</button>
              <button onClick={scrollNext} className={styles.arrow} aria-label="Next">→</button>
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="lead">Every tool ATS ships starts as a prototype built in direct response to field feedback. Here's what we've built.</p>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {prototypes.map((p) => {
                const s = STATUS_LABEL[p.status] || STATUS_LABEL.live
                return (
                  <div key={p.id} className={styles.slide}>
                    <div className={styles.card}>
                      <div className={styles.cardTop}>
                        <div
                          className={styles.statusBadge}
                          style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
                        >
                          {s.label}
                        </div>
                        <div className={styles.cardTitle}>{p.title}</div>
                        <div className={styles.cardSubtitle}>{p.subtitle}</div>
                        <p className={styles.cardDesc}>{p.description}</p>
                      </div>
                      <div className={styles.cardBottom}>
                        <div className={styles.tagRow}>
                          {p.tags.map(t => (
                            <span key={t} className={styles.tag}>{t}</span>
                          ))}
                        </div>
                        {p.link && (
                          <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            View prototype →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
