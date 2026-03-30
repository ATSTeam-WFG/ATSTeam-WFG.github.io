import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div>© 2026 WFG National Title Insurance Company · AI Technology &amp; Solutions Division</div>
        <div>Confidential — Internal Leadership Distribution Only</div>
      </div>
      <div className={styles.right}>IDEAS THAT IGNITE</div>
    </footer>
  )
}
