import { cursorHandlerAdd, cursorHandlerRemove } from '../utility/util'
import Image from 'next/image'
import styles from './Recommended.module.scss'

function Recommended() {
  return (
    <div
      data-scroll-section
      className={styles.recSection}
      onMouseEnter={() => cursorHandlerAdd('thumb')}
      onMouseLeave={() => cursorHandlerRemove('thumb')}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Recommended</h2>
        <div className={styles.comment}>
          <blockquote>
            <big>
              <span>&quot;</span>
              Matt&rsquo;s level of professionalism along with his knowledge
              &amp; experience make working with him a complete joy!
            </big>
            <div className={styles.author}>
              <div className={styles.authorImage}>
                <Image
                  src="/images/fredrikweisner.jpeg"
                  height={150}
                  width={150}
                  alt="Fredrik Weisner - DRKN"
                />
              </div>
              <div className={styles.authorMeta}>
                <h5>
                  Fredrik <i>Weisner</i>
                </h5>
                <p>DRKN Owner &amp; Co-Founder</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default Recommended
