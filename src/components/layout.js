import React from 'react'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="layout">
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
