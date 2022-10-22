import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { cursorHandlerAdd, cursorHandlerRemove } from '../utility/util'
import Image from 'next/image'
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
          <div className={styles.sidebar}>
            <aside>
              <ul>
                <li>Project X</li>
                <li>Project X</li>
                <li>Project X</li>
              </ul>
            </aside>
          </div>
          <div className={styles.projects}>
            <a
              href="https://kolex.gg"
              target="_blank"
              rel="noreferrer"
              className={styles.project}
              onMouseEnter={() => cursorHandlerAdd('project')}
              onMouseLeave={() => cursorHandlerRemove('project')}
            >
              <div className={styles.projectInfo}>
                <h3>Kolex</h3>
                <p>
                  Kolex Collectibles is the worlds first esport and influencer
                  NFT trading cards platform.
                </p>
                <h4>Project info</h4>
                <p>Frontend Developer &amp; UI/UX Designer</p>
                <ul>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Typescript</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              <div className={styles.projectArtwork}>
                <div className={styles.artwork}>
                  <Image
                    src="/images/project-kolex.jpg"
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

            <a
              href="https://skybox.gg"
              target="_blank"
              rel="noreferrer"
              className={styles.project}
              onMouseEnter={() => cursorHandlerAdd('project')}
              onMouseLeave={() => cursorHandlerRemove('project')}
            >
              <div className={styles.projectInfo}>
                <h3>Skybox</h3>
                <p>
                  Skybox is a combination of 3D Analysis and advanced Web
                  Analysis tools for Esports.
                </p>
                <h4>Project info</h4>
                <p>Frontend Developer &amp; UI/UX Designer</p>
                <ul>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Next.js</li>
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>Motion &amp; Video Production</li>
                </ul>
              </div>
              <div className={styles.projectArtwork}>
                <div className={styles.artwork}>
                  <Image
                    src="/images/project-skybox.jpg"
                    data-scroll
                    data-scroll-speed="1"
                    alt="Project Artwork"
                    width={580}
                    height={865}
                    layout="intrinsic"
                  />
                </div>
              </div>
            </a>

            <a
              href="https://flytro.com"
              target="_blank"
              rel="noreferrer"
              className={styles.project}
              onMouseEnter={() => cursorHandlerAdd('project')}
              onMouseLeave={() => cursorHandlerRemove('project')}
            >
              <div className={styles.projectInfo}>
                <h3>Flytro</h3>
                <p>
                  Flytro was a personal concept project. A performance &amp;
                  wellbeing app for esports teams and gamers.
                </p>
                <h4>Project info</h4>
                <p>Frontend Developer &amp; UI/UX Designer</p>
                <ul>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Storybook</li>
                  <li>Next.js</li>
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>Motion &amp; Video Production</li>
                </ul>
              </div>
              <div className={styles.projectArtwork}>
                <div className={styles.artwork}>
                  <Image
                    src="/images/project-flytro.jpg"
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

            <a
              href="https://nip.gl"
              target="_blank"
              rel="noreferrer"
              className={styles.project}
              onMouseEnter={() => cursorHandlerAdd('project')}
              onMouseLeave={() => cursorHandlerRemove('project')}
            >
              <div className={styles.projectInfo}>
                <h3>Ninjas in Pyjamas</h3>
                <p>
                  A world leading esports organisation based in Sweden with a
                  deep-rooted history in the Counter-Strike game series.
                </p>
                <h4>Project info</h4>
                <p>Frontend Developer &amp; UI/UX Designer</p>
                <ul>
                  <li>WordPress</li>
                  <li>Shopify</li>
                  <li>CRO &amp; SEO</li>
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>Motion &amp; Video Production</li>
                </ul>
              </div>
              <div className={styles.projectArtwork}>
                <div className={styles.artwork}>
                  <Image
                    src="/images/project-nip.jpg"
                    data-scroll
                    data-scroll-speed="1"
                    alt="Project Artwork"
                    width={580}
                    height={865}
                    layout="intrinsic"
                  />
                </div>
              </div>
            </a>

            <a
              href="https://drkn.com"
              target="_blank"
              rel="noreferrer"
              className={styles.project}
              onMouseEnter={() => cursorHandlerAdd('project')}
              onMouseLeave={() => cursorHandlerRemove('project')}
            >
              <div className={styles.projectInfo}>
                <h3>DRKN</h3>
                <p>
                  Founded in 2015, DRKN bridged the world of fashion through
                  streetwear and gaming.
                </p>
                <h4>Project info</h4>
                <p>Frontend Developer &amp; UI/UX Designer</p>
                <ul>
                  <li>Shopify</li>
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>CRO &amp; SEO</li>
                </ul>
              </div>
              <div className={styles.projectArtwork}>
                <div className={styles.artwork}>
                  <Image
                    src="/images/project-drkn.jpg"
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
