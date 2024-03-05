import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = (props) => {
  const image = getImage(props.data.mdx.frontmatter.hero_image)
  const frontmatter = props.pageContext.frontmatter
  return (
    // <Layout pageTitle={props.data.mdx.frontmatter.title}>
    //   Posted: {props.data.mdx.frontmatter.date}
    //   {props.children}
    // </Layout>
    <Layout pageTitle={frontmatter.title}>
      Posted: {frontmatter.date}
      <GatsbyImage image={image} alt={frontmatter.hero_image_alt} />
      {props.children}
    </Layout>
  )
}

export const Head = (props) => {
  return (
    <Seo pageTitle={props.pageContext.frontmatter.title} />
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "D MMM YYYY")
      hero_image_alt
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`
export default BlogPost
