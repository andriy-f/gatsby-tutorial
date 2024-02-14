import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>I’m good, thank you</p>
    </main>
  )
}

export default AboutPage

export const Head = () => {
  return (
    <>
      <title>About Me</title>
      <meta name="description" content="This is about page" />
    </>
  )
}
