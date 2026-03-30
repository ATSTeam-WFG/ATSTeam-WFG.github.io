import RevealWrapper from '../../shared/RevealWrapper'
import testimonials from '../../../data/testimonials.json'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.wrapper} id="testimonials">
      <div className={styles.inner}>
        <RevealWrapper><div className="section-tag">From the Field</div></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2>What the <span className="accent">Field</span> Says.</h2>
        </RevealWrapper>

        <div className={styles.grid}>
          {testimonials.map(({ quote, name, title, company }, i) => (
            <RevealWrapper key={i} delay={0.1 + i * 0.08}>
              <div className={styles.card}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quote}>{quote}</p>
                <div className={styles.attr}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.role}>{title} · {company}</div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
