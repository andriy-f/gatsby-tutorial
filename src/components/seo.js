import React from 'react'

import useSiteMetadata from '../hooks/useSiteMetadata'

const Seo = ({ pageTitle, pageDescription }) => {
  const siteMetadata = useSiteMetadata()
  const title = pageTitle ? `${pageTitle} | ${siteMetadata.title}` : siteMetadata.title
  const description = pageDescription || siteMetadata.description
  return (<>
    <title>{title}</title>
    <meta name="description" content={description} />
  </>
  )
}

export default Seo
