import React from 'react'
import { Link } from 'gatsby'

import {
  container as containerCSS,
  heading, navLinks, navLinkItem,
  navLinkText, siteTitle as siteTitleCSSClass
} from './layout.module.css'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Layout = ({ pageTitle, children }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <div className={containerCSS}>
      <header className={siteTitleCSSClass}>{siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">Blog</Link></li>
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
