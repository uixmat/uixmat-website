import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div data-scroll-section className={styles.footerSection}>
      <div className={styles.thanks}>
        <div
          className={styles.row}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
        >
          <div className={styles.marquee}>
            <span className={styles.white}>Благодаря за отделеното време</span>
            <span className={styles.purple}>Thank you for visiting</span>
            <span className={styles.outline}>Merci pour votre visite</span>
            <span className={styles.white}>Благодаря за отделеното време</span>
            <span className={styles.purple}>Thank you for visiting</span>
            <span className={styles.outline}>Merci pour votre visite</span>
          </div>
        </div>
        <div
          className={styles.row}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
        >
          <div className={styles.marquee}>
            <span className={styles.purple}>Благодаря за отделеното време</span>
            <span className={styles.outline}>Merci pour votre visite</span>
            <span className={styles.white}>Thank you for visiting</span>
            <span className={styles.purple}>Благодаря за отделеното време</span>
            <span className={styles.outline}>Merci pour votre visite</span>
            <span className={styles.white}>Thank you for visiting</span>
          </div>
        </div>
        <div
          className={styles.row}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
        >
          <div className={styles.marquee}>
            <span className={styles.outline}>Merci pour votre visite</span>
            <span className={styles.white}>Благодаря за отделеното време</span>
            <span className={styles.purple}>Thank you for visiting</span>
            <span className={styles.outline}>Merci pour votre visite</span>
            <span className={styles.white}>Благодаря за отделеното време</span>
            <span className={styles.purple}>Thank you for visiting</span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.connections}>
          <a
            href="https://twitter.com/uixmat/"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              <FaTwitter className={styles.icon} />
              Twitter
            </span>
          </a>
          <a
            href="https://www.instagram.com/army.burning/"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              <FaInstagram className={styles.icon} />
              Instagram
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/uixmat/"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              <FaLinkedin className={styles.icon} />
              Linkedin
            </span>
          </a>
          <a
            href="https://github.com/mattsince87"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              <FaGithub className={styles.icon} />
              GitHub
            </span>
          </a>
        </div>

        <div className={styles.bottomCols}>
          <div>
            <Link prefetch href="/privacy">
              Privacy
            </Link>
          </div>
          <div>
            <p>Designed &amp; developed with 🤍 by Matt</p>
          </div>
          <div>&copy; 2022</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
