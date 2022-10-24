import { motion, useAnimation } from 'framer-motion'
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

  const arrow = {
    initial: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    enter: {
      opacity: 1,
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
      transition: {
        duration: 0.8,
        ease: [0.18, 0.63, 0.28, 0.9],
      },
    },
  }

  const startAnimation = async () => {
    await HeroLine.start('enter')
  }

  startAnimation()

  return (
    <div data-scroll-section className={styles.heroSection}>
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
            <motion.i variants={textIn} className={styles.purple}>
              D
            </motion.i>
            <motion.i variants={textIn} className={styles.purple}>
              e
            </motion.i>
            <motion.i variants={textIn} className={styles.purple}>
              s
            </motion.i>
            <motion.i variants={textIn} className={styles.purple}>
              i
            </motion.i>
            <motion.i variants={textIn} className={styles.purple}>
              g
            </motion.i>
            <motion.i variants={textIn} className={styles.purple}>
              n
            </motion.i>
            <motion.i variants={textIn} className={styles.purple}>
              e
            </motion.i>
            <motion.i variants={textIn} className={styles.purple}>
              r
            </motion.i>
          </div>
          <motion.div className={styles.brain} variants={brain}>
            <Brain />
          </motion.div>
          <a
            href="#intro"
            data-scroll-to
            rel="nofollow"
            className={styles.scrollDown}
          >
            <svg
              className={styles.arrowDown}
              width="84"
              height="44"
              viewBox="0 0 84.243 44.242"
            >
              <g transform="translate(-97.379 -6157.379)">
                <motion.line
                  x2="40"
                  y2="40"
                  transform="translate(99.5 6159.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="square"
                  stroke-width="3"
                  variants={arrow}
                />
                <motion.line
                  x1="40"
                  y2="40"
                  transform="translate(139.5 6159.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="square"
                  stroke-width="3"
                  variants={arrow}
                />
              </g>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
