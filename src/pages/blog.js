import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const pageTitle = 'My Blog Posts'

const BlogPage = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>Blog Posts will show up here later on.</p>
    </Layout>
  )
}

export default BlogPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Blog" />
    </>
  )
}
