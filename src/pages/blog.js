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
        {data.allMdx.nodes.map(node => (
          <li key={node.id}>
            {node.frontmatter.title} ({node.frontmatter.date})
          </li>)
        )}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const Head = () => (<Seo pageTitle="Blog" />)

export const query = graphql`
{
  allMdx(sort: { frontmatter: { date: DESC } }) {
    nodes {
      frontmatter {
        date(formatString: "D MMM YYYY")
        title
        slug
      }
      excerpt
      id
    }
  }
}
`
