import Spline from '@splinetool/react-spline'
import styles from './Blob.module.scss'

export default function Blob() {
  return (
    <div
      className={styles.blobContainer}
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="-3"
    >
      <Spline scene="https://prod.spline.design/CzNalc7FUZGolPZA/scene.splinecode" />
    </div>
  )
}
