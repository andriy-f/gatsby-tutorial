import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
  container as containerCSS,
  heading, navLinks, navLinkItem,
  navLinkText, siteTitle as siteTitleCSSClass
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}`)

  return (
    <div className={containerCSS}>
      <header className={siteTitleCSSClass}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  )
}

export default Layout
