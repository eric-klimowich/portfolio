import React from 'react'

import Link from './Link'

const Links = () => {
  return (
    <ul className="links">
      <li className="link">
        <Link
          link="https://github.com/eric-klimowich"
          nameOfClass="octocat-image"
          imgSrc="/images/logos/Octocat.png"
          imgAlt="Link to Eric Klimowich's Github page"
        />
      </li>
      <li className="link">
        <Link
          link="https://www.linkedin.com/in/eric-klimowich-523a8a56/"
          nameOfClass="linkedin-image"
          imgSrc="/images/logos/In-2C-128px-TM.png"
          imgAlt="Link to Eric Klimowich's LinkedIn page"
        />
      </li>
      <li className="link">
        <Link
          link="https://medium.com/@eric.klimowich"
          nameOfClass="medium-image"
          imgSrc="/images/logos/Monogram.png"
          imgAlt="Link to Eric Klimowich's Medium page"
        />
      </li>
      <li className="link">
        <Link
          link="mailto:eric.klimowich@gmail.com"
          nameOfClass="email-image"
          imgSrc="/images/logos/logo_gmail_128px.png"
          imgAlt="Link to Eric Klimowich's email"
        />
      </li>
    </ul>
  )
}

export default Links
