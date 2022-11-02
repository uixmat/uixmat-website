import { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Layout from '../components/common/Layout'
import Blob from '../components/common/Blob'
import styles from '../scss/pages/privacy.module.scss'

function Privacy() {
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

  const startAnimation = async () => {
    await blob.start('enter')
  }
  startAnimation()

  return (
    <Layout title="uixmat - Privacy Policy">
      <div data-scroll-container ref={containerRef}>
        <motion.div
          data-scroll-section
          className={styles.privacyPage}
          variants={variants}
          initial="initial"
          animate={blob}
        >
          <div>
            <motion.div variants={fadeIn}>
              <Blob />
            </motion.div>

            <motion.div className={styles.privacy} variants={fadeIn}>
              <h1>No tracking here</h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Privacy
