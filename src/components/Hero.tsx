import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { cursorHandlerAdd, cursorHandlerRemove } from '../utility/util'
import Brain from '../assets/brain.svg'
import styles from './Hero.module.scss'

const Hero = (): JSX.Element => {
  const HeroLine = useAnimation()

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

  const textIn = {
    initial: {
      opacity: 0,
      y: 50,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
  }

  const brain = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  }

  const startAnimation = async () => {
    await HeroLine.start('enter')
  }

  startAnimation()

  return (
    <div
      data-scroll-section
      className={styles.heroSection}
      onMouseEnter={() => cursorHandlerAdd('hidden')}
      onMouseLeave={() => cursorHandlerRemove('hidden')}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.heroText}
          data-scroll
          variants={variants}
          initial="initial"
          animate={HeroLine}
        >
          <div
            className={`${styles.text} ${styles.creative}`}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
          >
            <motion.i className={styles.shadow} variants={textIn}>
              C
            </motion.i>
            <motion.i className={styles.shadow} variants={textIn}>
              r
            </motion.i>
            <motion.i className={styles.shadow} variants={textIn}>
              e
            </motion.i>
            <motion.i className={styles.shadow} variants={textIn}>
              a
            </motion.i>
            <motion.i className={styles.shadow} variants={textIn}>
              t
            </motion.i>
            <motion.i className={styles.shadow} variants={textIn}>
              i
            </motion.i>
            <motion.i className={styles.shadow} variants={textIn}>
              v
            </motion.i>
            <motion.i className={styles.shadow} variants={textIn}>
              e
            </motion.i>
          </div>
          <div
            className={`${styles.text} ${styles.developer}`}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-1"
          >
            <motion.i variants={textIn} className={styles.stroke}>
              D
            </motion.i>
            <motion.i variants={textIn} className={styles.stroke}>
              e
            </motion.i>
            <motion.i variants={textIn} className={styles.stroke}>
              v
            </motion.i>
            <motion.i variants={textIn} className={styles.stroke}>
              e
            </motion.i>
            <motion.i variants={textIn} className={styles.stroke}>
              l
            </motion.i>
            <motion.i variants={textIn} className={styles.stroke}>
              o
            </motion.i>
            <motion.i variants={textIn} className={styles.stroke}>
              p
            </motion.i>
            <motion.i variants={textIn} className={styles.stroke}>
              e
            </motion.i>
            <motion.i variants={textIn} className={styles.stroke}>
              r
            </motion.i>
          </div>
          <div
            className={`${styles.text} ${styles.designer}`}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="2"
          >
            <motion.b variants={textIn}>&amp;</motion.b>
            <motion.i variants={textIn} className={styles.shadow}>
              D
            </motion.i>
            <motion.i variants={textIn} className={styles.shadow}>
              e
            </motion.i>
            <motion.i variants={textIn} className={styles.shadow}>
              s
            </motion.i>
            <motion.i variants={textIn} className={styles.shadow}>
              i
            </motion.i>
            <motion.i variants={textIn} className={styles.shadow}>
              g
            </motion.i>
            <motion.i variants={textIn} className={styles.shadow}>
              n
            </motion.i>
            <motion.i variants={textIn} className={styles.shadow}>
              e
            </motion.i>
            <motion.i variants={textIn} className={styles.shadow}>
              r
            </motion.i>
          </div>
          <motion.div className={styles.brain} variants={brain}>
            <Brain />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
