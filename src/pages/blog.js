import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const pageTitle = 'My Blog Posts'

/* data gets filled by the query exported by `export const query` (see below) */
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={pageTitle}>
      <ul>
        {data.allFile.nodes.map(node => (<li key={node.name}>{node.name}</li>))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const Head = () => (<Seo pageTitle="Blog" />)

export const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
}
`
