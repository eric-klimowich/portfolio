import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavButton = () => {
  return (
    <nav class="mobile-nav">
      <ul class="mobile-nav__items">
        <li class="mobile-nav__item">
          <Link to="/about">
            About
          </Link>
        </li>
        <li class="mobile-nav__item">
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li class="mobile-nav__item">
          <Link to="/blogs">
            Blogs
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/open?id=0B7jl9f0rvdyPeWZrYk1Zb3RmZDh1Sm0zYWZiYl9PZU1RUDVJ"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavButton
