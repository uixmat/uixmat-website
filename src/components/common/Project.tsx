import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { Project } from '../../models'
import { cursorHandlerAdd, cursorHandlerRemove } from '../../utility/util'
import styles from '../Experience.module.scss'

interface Props {
  project: Project
}

const Project = ({ project }: Props) => {
  const { id, url, name, description, info, image } = project
  const ref = useRef(null)
  const projectInfo = useAnimation()
  const isInView = useInView(ref, { amount: 0.25, once: true })

  const variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const fadeUp = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }
  const rotateIn = {
    initial: {
      opacity: 0,
      rotateX: -90,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }

  useEffect(() => {
    if (isInView) {
      projectInfo.start('enter')
    }
    if (!isInView) {
      projectInfo.start('initial')
    }
  }, [projectInfo, isInView])

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.project}
      onMouseEnter={() => cursorHandlerAdd('project')}
      onMouseLeave={() => cursorHandlerRemove('project')}
      key={id}
      ref={ref}
      id={`project-${id}`}
    >
      <motion.div
        className={styles.projectInfo}
        initial="hidden"
        animate={projectInfo}
        variants={variants}
      >
        <h3>
          <div className={styles.parent}>
            <motion.div variants={rotateIn}>{name}</motion.div>
          </div>
        </h3>
        <motion.div variants={fadeUp}>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <h4>Project info</h4>
          <div dangerouslySetInnerHTML={{ __html: info }}></div>
        </motion.div>
      </motion.div>
      <div className={styles.projectArtwork}>
        <div className={styles.artwork}>
          <Image
            src={image}
            data-scroll
            data-scroll-speed="-1"
            alt="Project Artwork"
            width={580}
            height={865}
            layout="intrinsic"
          />
        </div>
      </div>
    </a>
  )
}

export default Project
