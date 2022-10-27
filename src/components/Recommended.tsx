import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { cursorHandlerAdd, cursorHandlerRemove } from '../utility/util'
import testimonials from '../utility/testimonials'
import Testimonial from './common/Testimonial'
import Arrow from '../assets/arrow.svg'
import styles from './Recommended.module.scss'

const Recommended = () => {
  const heading3d = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [index, setIndex] = useState(0)
  const handleClick = () => {
    if (index === testimonials.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === testimonials.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 7000)
    return () => clearTimeout(timer)
  }, [index])

  useEffect(() => {
    if (isInView) {
      heading3d.start('visible')
    }
    if (!isInView) {
      heading3d.start('hidden')
    }
  }, [heading3d, isInView])

  const rotateIn = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div data-scroll-section className={styles.recSection}>
      <div className={styles.container}>
        <h2 className={styles.heading} data-scroll ref={ref}>
          <div className={styles.parent}>
            <motion.div
              initial="hidden"
              animate={heading3d}
              variants={rotateIn}
            >
              Recommended
            </motion.div>
          </div>
        </h2>
        <div className={styles.recommended}>
          <div className={styles.controls}>
            <div
              className={styles.next}
              onClick={handleClick}
              onMouseEnter={() => cursorHandlerAdd('hidden')}
              onMouseLeave={() => cursorHandlerRemove('hidden')}
            >
              <div>
                <span>
                  <Arrow />
                </span>
              </div>
            </div>
            <div
              className={styles.prev}
              onClick={handleClick}
              onMouseEnter={() => cursorHandlerAdd('hidden')}
              onMouseLeave={() => cursorHandlerRemove('hidden')}
            >
              <div>
                <span>
                  <Arrow />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.comment} data-key={index}>
            <AnimatePresence exitBeforeEnter>
              {testimonials
                .filter((testimonial) => testimonial.id === index)
                .map((testimonial) => (
                  <Testimonial key={testimonial.id} testimonial={testimonial} />
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommended
