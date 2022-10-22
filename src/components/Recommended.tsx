import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { cursorHandlerAdd, cursorHandlerRemove } from '../utility/util'
import testimonials from '../utility/testimonials'
import TestimonialCard from './common/testimonialCard'
import Arrow from '../assets/arrow.svg'
import styles from './Recommended.module.scss'

const Recommended = () => {
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
    }, 5000)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div data-scroll-section className={styles.recSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Recommended</h2>
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
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommended
