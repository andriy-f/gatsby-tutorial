import * as React from 'react'
import Layout from '../components/layout'

const pageTitle = "Home Page"
const IndexPage = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <title>{pageTitle}</title>

export default IndexPage
