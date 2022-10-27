import styles from './Intro.module.scss'

function Intro() {
  return (
    <div data-scroll-section className={styles.introSection} id="intro">
      <div className={styles.container}>
        <div className={styles.cols}>
          <div className={styles.sidebar}>
            <aside>
              <h2>Intro</h2>
              <ul>
                <li>🇬🇧 From Liverpool, England</li>
                <li>🇧🇬 Based in Varna, Bulgaria</li>
                <li>⚽ Footballer</li>
                <li>🎮 Lifelong gamer</li>
                <li>💡 +15 years experience</li>
              </ul>
            </aside>
          </div>
          <div className={styles.textBlock}>
            <p>
              15 years working with web technologies with a passion for working
              at the crossroad of beautiful user experiences and creativity.
            </p>
            <p>
              A lifelong gamer and football fan hailing from Liverpool, England
              living on the Black Sea coast in Varna, Bulgaria. You&apos;ll find
              me on the field playing for watching football when I&apos;m not
              playing video games.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
