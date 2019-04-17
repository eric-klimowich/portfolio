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
          <img className="octocat-image" src="/images/Octocat.png" alt="Link to Eric Klimowich's Github page"/>
        </a>
      </li>
      <li className="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/eric-klimowich-523a8a56/"
        >
          <img className="linkedin-image" src="/images/In-2C-128px-TM.png" alt="Link to Eric Klimowich's LinkedIn page"/>
        </a>
      </li>
      <li className="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@eric.klimowich"
        >
          <img className="medium-image" src="/images/Monogram.png" alt="Link to Eric Klimowich's Medium page"/>
        </a>
      </li>
      <li className="link">
        <a
          href="mailto:eric.klimowich@gmail.com"
        >
          <img className="email-image" src="/images/logo_gmail_128px.png" alt="Link to Eric Klimowich's email"/>
        </a>
      </li>
    </ul>
  )
}

export default Links
