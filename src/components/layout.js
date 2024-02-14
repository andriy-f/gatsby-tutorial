import React from 'react'
import { Link } from 'gatsby'
import { container as containerCSS } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={containerCSS}>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  )
}

export default Layout
