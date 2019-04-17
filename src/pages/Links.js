import React from 'react'

const Links = () => {
  return (
    <ul className="links">
      <li className="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eric-klimowich"
        >
          Github
        </a>
      </li>
      <li className="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/eric-klimowich-523a8a56/"
        >
          LinkedIn
        </a>
      </li>
      <li className="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@eric.klimowich"
        >
          Blog
        </a>
      </li>
      <li className="link">
        <a
          href="mailto:eric.klimowich@gmail.com"
        >
          Email
        </a>
      </li>
    </ul>
  )
}

export default Links
