import { useRef } from 'react'
import Layout from '../components/common/Layout'
import styles from '../scss/pages/privacy.module.scss'

function Privacy() {
  const containerRef = useRef(null)
  return (
    <Layout title="uixmat - Privacy Policy">
      <div data-scroll-container ref={containerRef}>
        <div data-scroll-section className={styles.privacyPage}>
          <div className={styles.container}>
            <div className={styles.privacy}>
              <h1>Privacy Policy</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                dicta atque consequatur labore eligendi minus voluptatum aperiam
                voluptas. Voluptas repudiandae deserunt error aspernatur sit
                blanditiis. Optio officia laboriosam modi iure.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                dicta atque consequatur labore eligendi minus voluptatum aperiam
                voluptas. Voluptas repudiandae deserunt error aspernatur sit
                blanditiis. Optio officia laboriosam modi iure.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                dicta atque consequatur labore eligendi minus voluptatum aperiam
                voluptas. Voluptas repudiandae deserunt error aspernatur sit
                blanditiis. Optio officia laboriosam modi iure.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                dicta atque consequatur labore eligendi minus voluptatum aperiam
                voluptas. Voluptas repudiandae deserunt error aspernatur sit
                blanditiis. Optio officia laboriosam modi iure.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                dicta atque consequatur labore eligendi minus voluptatum aperiam
                voluptas. Voluptas repudiandae deserunt error aspernatur sit
                blanditiis. Optio officia laboriosam modi iure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Privacy
