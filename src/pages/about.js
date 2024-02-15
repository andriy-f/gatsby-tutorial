import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const pageTitle = "About Me"

const AboutPage = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>I’m good, thank you</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle={pageTitle} />
      <meta name="description" content={'This is about page'} />
    </>
  )
}
