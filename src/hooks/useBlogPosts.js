import { useStaticQuery, graphql } from 'gatsby'

export const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
}
`

const useBlogPosts = () => {
  const data = useStaticQuery(query)
  return data.allFile.nodes.map(node => node.name)
}

export default useBlogPosts
