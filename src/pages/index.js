import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const pageTitle = "Home Page"
const IndexPage = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Yoga class"
        src="../images/Yoga-class.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title>{pageTitle}</title>

export default IndexPage
