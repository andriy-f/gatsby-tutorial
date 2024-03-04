import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const pageTitle = 'My Blog Posts'

/* data gets filled by the query exported by `export const query` (see below) */
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={pageTitle}>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>)
      )}
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
