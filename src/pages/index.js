import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'

const pageTitle = "Home"

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

export const Head = () => {
  return (
    <>
      <Seo pageTitle={pageTitle} />
      <meta name="description" content={`This is ${pageTitle} page`} />
    </>
  )
}

export default IndexPage
