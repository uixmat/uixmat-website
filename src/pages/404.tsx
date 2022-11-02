import { useRef } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import Layout from '../components/common/Layout'
import Blob from '../components/common/Blob'
import styles from '../scss/pages/generic.module.scss'

function Error404() {
  const containerRef = useRef(null)
  const blob = useAnimation()

  const variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  }

  const fadeIn = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1.5,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  }

  const startAnimation = () => {
    blob.start('enter')
  }
  startAnimation()

  return (
    <Layout title="404 - The Void">
      <div data-scroll-container ref={containerRef}>
        <motion.div
          data-scroll-section
          className={styles.genericPage}
          variants={variants}
          initial="initial"
          animate={blob}
        >
          <div>
            <motion.div variants={fadeIn}>
              <Blob />
            </motion.div>

            <motion.div
              className={`${styles.text} ${styles.error}`}
              variants={fadeIn}
            >
              <h1>404 Lost in the void</h1>
            </motion.div>

            <div className={styles.void} />
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Error404
