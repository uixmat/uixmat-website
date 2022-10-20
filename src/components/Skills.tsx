import styles from './Skills.module.scss'

function Skills() {
  return (
    <div data-scroll-section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.cols}>
          <div className={styles.sidebar}>
            <aside>
              <h2>Dev.</h2>
              <ul>
                <li>JavaScript</li>
                <li>React &amp; React Native</li>
                <li>Swift</li>
                <li>Typescript</li>
                <li>ES6 &amp; a11y</li>
                <li>Github</li>
                <li>Storybook</li>
                <li>PHP</li>
                <li>Shopify</li>
              </ul>
              <h2>Design.</h2>
              <ul>
                <li>Adobe Xd</li>
                <li>Adobe Ai</li>
                <li>Adobe Ps</li>
                <li>Adobe Ae</li>
                <li>Adobe Id</li>
                <li>Figma</li>
                <li>Sketch</li>
                <li>Framer</li>
              </ul>
            </aside>
          </div>
          <div className={styles.main}>
            <div className={styles.textBlock}>
              <p>
                Over the last several years I&rsquo;ve become increasingly
                passionate about mobile &amp; progressive web apps. Working
                predominantly with React &amp; React Native to achieve the best
                cross-platform experiences possible.
              </p>
            </div>
            <div className={styles.col}>
              <div className={styles.card} data-scroll data-scroll-speed="-.5">
                <h3>React</h3>
                <div className={styles.desc}>
                  <p>
                    Despite working primarily in React, I also work with React
                    Native in order to deliver the best mobile experience
                    possible.
                  </p>
                </div>
              </div>
              <div className={styles.card} data-scroll data-scroll-speed="-.5">
                <h3>UI/UX</h3>
                <div className={styles.desc}>
                  <p>
                    User experience naturally flow from building intuitive user
                    interfaces. I enjoy making subtle adjustments to the UI
                    through A/B testing to improve conversion rates.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.card} data-scroll data-scroll-speed=".5">
                <h3>Process</h3>
                <div className={styles.desc}>
                  <p>
                    No matter the size of my projects i have exclusively used
                    git for the past ten years. My IDE has moved with the times
                    and these days i&rsquo;m using VSCode.
                  </p>
                </div>
              </div>
              <div className={styles.card} data-scroll data-scroll-speed=".5">
                <h3>Design</h3>
                <div className={styles.desc}>
                  <p>
                    With a plethora of fantastic design tools out there i have
                    used many depending on the task requirements or existing
                    team setup, i prefer not to limit myself to using only one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
