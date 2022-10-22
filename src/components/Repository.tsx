import { useEffect, useState } from 'react'
import { cursorHandlerAdd, cursorHandlerRemove } from '../utility/util'
import { Repo } from '../models'
import Github from '../assets/github.svg'
import styles from './Repository.module.scss'

function Repository() {
  const [data, setData] = useState({} as Repo) // useState requires Object as Interface
  const [isLoading, setLoading] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.github.com/repos/mattsince87/uixmat')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No repo data</p>

  // Input
  const handleFocus = (event: any) => {
    setIsCopied((current) => !current)
    event.target.select()
    document.execCommand('copy')
  }
  const Input = (props: any) => (
    <input
      // className={props.className}
      className={isCopied ? 'copied' : ''}
      type="url"
      value={props.value}
      onClick={handleFocus}
      onMouseEnter={() => cursorHandlerAdd('copy')}
      onMouseLeave={() => cursorHandlerRemove('copy')}
      spellCheck="false"
    />
  )

  return (
    <div data-scroll-section className={styles.repoSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Use This Project</h2>
        <p className={styles.subHeading}>
          This project is open source so that anyone who wants to can take a
          look at how it&rsquo;s built, use it for their own project or track
          it&rsquo;s progress.
        </p>

        <div className={styles.cols}>
          <div className={styles.item}>
            <Github />
            <Input value={data.ssh_url} />
          </div>
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className={styles.item}
          >
            <big>{data.stargazers_count}</big>
            <span>Stargazers on Github</span>
          </a>
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className={styles.item}
          >
            <big>{data.watchers_count}</big>
            <span>Watchers on Github</span>
          </a>
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className={styles.item}
          >
            <big>{data.open_issues_count}</big>
            <span>Open issues</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Repository
