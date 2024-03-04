import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = () => {
  return (
    <Layout pageTitle='Super Cool Blog Post'>
      <p>This is a super cool blog post about Gatsby and MDX.</p>
    </Layout>
  )
}

export const Head = () => {
  return (
    <Seo pageTitle='Super Cool Blog Post' />
  )
}

export default BlogPost
