import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Vision', href: '#vision' },
  { label: 'Journey', href: '#evolution' },
  { label: 'Model', href: '#model' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Newsletter', href: '#newsletter' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>WFG · ATS Playbook 2026</div>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={open ? styles.barTop + ' ' + styles.openTop : styles.barTop} />
        <span className={open ? styles.barMid + ' ' + styles.openMid : styles.barMid} />
        <span className={open ? styles.barBot + ' ' + styles.openBot : styles.barBot} />
      </button>

      <div className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
