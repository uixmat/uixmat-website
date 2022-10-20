import { useEffect, useState } from 'react'
import { cursorHandlerAdd, cursorHandlerRemove } from '../utility/util'
import { Repo } from '../models'
import styles from './Repository.module.scss'

function Repository() {
  const [data, setData] = useState({} as Repo) // useState requires Object as Interface
  const [isLoading, setLoading] = useState(false)

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

  return (
    <div
      data-scroll-section
      className={styles.repoSection}
      onMouseEnter={() => cursorHandlerAdd('git')}
      onMouseLeave={() => cursorHandlerRemove('git')}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Use This Project</h2>
        <p className={styles.subHeading}>
          This project is open source so that anyone who wants to can take a
          look at how it&rsquo;s built, use it for their own project or track
          it&rsquo;s progress.
        </p>

        <div className={styles.cols}>
          <div className={styles.sidebar}>
            <aside>
              <ul>
                <li>{data.name}</li>
                <li>Hosted on Github</li>
                <li>
                  <input type="text" value={data.ssh_url} readOnly />
                </li>
                <li>
                  <a href="">View Repository</a>
                </li>
              </ul>
            </aside>
          </div>
          <div className={styles.gitGrid}>
            <div>
              <p>Something</p>
            </div>
            <div>
              <p>Something</p>
            </div>
            <div>
              <p>Something</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repository
