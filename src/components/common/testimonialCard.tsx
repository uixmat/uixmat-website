import React from 'react'
import { motion } from 'framer-motion'
import { Testimonial } from '../../models'
import Image from 'next/image'
import Quote from '../../assets/quote.svg'
import styles from '../Recommended.module.scss'

interface Props {
  testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: Props) => {
  const { id, authorImg, authorFirstName, authorLastName, authorPos, text } =
    testimonial

  return (
    <motion.div
      className={styles.card}
      key={id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.33 }}
    >
      <blockquote>
        <big>
          <span>
            <Quote />
          </span>
          {text}
        </big>
        <motion.div className={styles.author} exit={{ opacity: 0, x: -40 }}>
          <div className={styles.authorImage}>
            <Image
              src={authorImg}
              height={150}
              width={150}
              alt="Fredrik Weisner - DRKN"
            />
          </div>
          <div className={styles.authorMeta}>
            <h5>
              {authorFirstName} <i>{authorLastName}</i>
            </h5>
            <p>{authorPos}</p>
          </div>
        </motion.div>
      </blockquote>
    </motion.div>
  )
}

export default TestimonialCard
