import Link from 'next/link'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.uixmat}>
          <Link href="/" title="Home" scroll={false}>
            <a>
              uixmat<span>.dev</span>
            </a>
          </Link>
          <a href="mailto:mattsince87@gmail.com" title="Mail me">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/mattsince87/uixmat"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
