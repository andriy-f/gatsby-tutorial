import * as React from 'react'
// import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = (props) => {
  return (
    // <Layout pageTitle={props.data.mdx.frontmatter.title}>
    //   Posted: {props.data.mdx.frontmatter.date}
    //   {props.children}
    // </Layout>
    <Layout pageTitle={props.pageContext.frontmatter.title}>
      Posted: {props.pageContext.frontmatter.date}
      {props.children}
    </Layout>
  )
}

export const Head = (props) => {
  return (
    <Seo pageTitle={props.pageContext.frontmatter.title} />
  )
}

// export const query = graphql`
// query ($id: String) {
//   mdx(id: {eq: $id}) {
//     frontmatter {
//       title
//       date(formatString: "D MMM YYYY")
//     }
//   }
// }
// `
export default BlogPost
