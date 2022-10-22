import Image from 'next/image'
import { Project } from '../../models'
import { cursorHandlerAdd, cursorHandlerRemove } from '../../utility/util'
import styles from '../Experience.module.scss'

interface Props {
  project: Project
}

const Project = ({ project }: Props) => {
  const { id, url, name, description, info, image } = project
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.project}
      onMouseEnter={() => cursorHandlerAdd('project')}
      onMouseLeave={() => cursorHandlerRemove('project')}
      key={id}
    >
      <div className={styles.projectInfo}>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>Project info</h4>
        <p>{info}</p>
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
            // src="/images/project-kolex.jpg"
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
