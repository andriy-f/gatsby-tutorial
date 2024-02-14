import * as React from 'react'
import Layout from '../components/layout'

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
      <title>{pageTitle}</title>
      <meta name="description" content="This is about page" />
    </>
  )
}
