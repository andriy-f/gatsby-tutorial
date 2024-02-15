import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
    <Layout>
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
