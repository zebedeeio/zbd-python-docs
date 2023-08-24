import styles from './footer.module.css'

export default () => (
  <footer className={styles.root}>
    <nav className={styles.content}>
      <div className={styles.left}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zantoshi/zebedee-py"
        >
          GitHub
        </a>
        <span>
          License:&nbsp;<b>MIT</b>
        </span>
      </div>

      <a
        href="https://zebedee.io"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.zbd}
      >
        <img src="/zbd-logo.svg" className={styles.zebedeeLogo} />
      </a>
    </nav>
  </footer>
)
