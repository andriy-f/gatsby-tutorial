import React from 'react'
import { Link } from 'gatsby'
import {
  container as containerCSS,
  heading, navLinks, navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={containerCSS}>
      <header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">Home</Link></li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
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
