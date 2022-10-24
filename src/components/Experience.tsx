import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import projects from '../utility/projects'
import Project from './common/Project'
import styles from './Experience.module.scss'

const Experience = () => {
  const heading3d = useAnimation()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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

  useEffect(() => {
    if (isInView) {
      heading3d.start('visible')
    }
    if (!isInView) {
      heading3d.start('hidden')
    }
  }, [heading3d, isInView])

  return (
    <div data-scroll-section className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={styles.heading} data-scroll ref={ref}>
          <div className={styles.parent}>
            <motion.div
              initial="hidden"
              animate={heading3d}
              variants={rotateIn}
            >
              Experience
            </motion.div>
          </div>
        </h2>
        <div className={styles.cols}>
          <div className={styles.sidebar} id="xp-side">
            <aside data-scroll data-scroll-sticky data-scroll-target="#xp-side">
              <ul className={styles.sidelist}>
                {projects.map((project) => (
                  <li key={project.id} data-scroll>
                    <a
                      href={`#project-${project.id}`}
                      data-scroll-to
                      rel="nofollow"
                    >
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <div className={styles.projects}>
            {projects.map((project) => (
              <Project key={`${project.id}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
