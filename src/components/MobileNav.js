import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__items">
        <li className="mobile-nav__item">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link to="/blogs">
            Blogs
          </Link>
        </li>
        <li className="mobile-nav__item--cta">
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

export default MobileNav
