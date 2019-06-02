import React, { Component } from 'react'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  state = {
    clicked: false
  }

  handleShowMobileNav = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <header className="main-header" onClick={this.handleShowMobileNav}>
        <button class="toggle-button">
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
        </button>
        <MobileNav />
        <div className="main-header__title">
          <Link to="/">
            Eric Klimowich
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link to="/about">
                About
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to="/projects">
                Projects
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="main-nav__item main-nav__item--cta">
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
      </header>
    )
  }
}

export default Navbar
