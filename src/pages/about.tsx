import Link from 'next/link'
import Layout from '../components/Layout'

function AboutPage() {
  return (
    <Layout title="About Page">
      <h1>Something H1</h1>
      <p>
        Go to the <Link href="/">Home Page</Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        consectetur quia! Id, deleniti nobis blanditiis minima, possimus dolor
        facilis deserunt ipsa dicta saepe, placeat labore accusantium
        reprehenderit vel architecto perferendis.
      </p>
    </Layout>
  )
}

export default AboutPage
