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
  const heading3d = useAnimation()
  const isInView = useInView(ref, { margin: '80px 0px 0px 0px' })

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
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.project}
      onMouseEnter={() => cursorHandlerAdd('project')}
      onMouseLeave={() => cursorHandlerRemove('project')}
      key={id}
      ref={ref}
    >
      <div className={styles.projectInfo}>
        <h3>
          <div className={styles.parent}>
            <motion.div
              initial="hidden"
              animate={heading3d}
              variants={rotateIn}
            >
              {name}
            </motion.div>
          </div>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <h4>Project info</h4>
        <div dangerouslySetInnerHTML={{ __html: info }}></div>
      </div>
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
