import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './components/MobileNav'

export const renderFrontAndBackGitRepo = props => {
  return (
    <Fragment>
    <li className="project__link-container">
      <a
        className="project__link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.frontEndLink}
      >
        <img className="b-and-w-octocat-image" src="/images/logos/GitHub-Mark-120px-plus.png" alt=""/>Front End
      </a>
    </li>
    <li className="project__link-container">
      <a
        className="project__link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.backEndLink}
      >
        <img className="b-and-w-octocat-image" src="/images/logos/GitHub-Mark-120px-plus.png" alt=""/>Back End
      </a>
    </li>
    </Fragment>
  )
}

export const renderSingleGitRepo = props => {
  return (
    <li className="project__link-container">
      <a
        className="project__link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.githubLink}
      >
        <img className="b-and-w-octocat-image" src="/images/logos/GitHub-Mark-120px-plus.png" alt=""/>
      </a>
    </li>
  )
}

export const renderLinkWithPageOpen = props => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
    >
      <img className={props.nameOfClass} src={props.imgSrc} alt={props.imgAlt}/>
    </a>
  )
}

export const renderLinkWithoutPageOpen = props => {
  return (
    <a
      href={props.link}
    >
      <img className={props.nameOfClass} src={props.imgSrc} alt={props.imgAlt}/>
    </a>
  )
}

export const renderBlurbPicLeft = props => {
  return (
    <div className="blurb">
      <div className="blurb__image--container">
        <img className="blurb__image" src={props.blurbImage}/>
      </div>
      <div className="blurb__info">
        <h1 className="blurb__title">
          {props.title}
        </h1>
        <p className="blurb__text">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export const renderBlurbPicRight = props => {
  return (
    <div className="blurb">
      <div className="blurb__info">
        <h1 className="blurb__title">
          {props.title}
        </h1>
        <p className="blurb__text">
          {props.description}
        </p>
      </div>
      <div className="blurb__image--container">
        <img className="blurb__image" src={props.blurbImage}/>
      </div>
    </div>
  )
}

export const renderBlurbPicBoth = props => {
  return (
    <div className="blurb">
      <div className="blurb__image--container-left">
        <img className="blurb__image" src={props.blurbImage}/>
      </div>
      <div className="blurb__info-center">
        <h1 className="blurb__title">
          {props.title}
        </h1>
        <p className="blurb__text">
          {props.description}
        </p>
      </div>
      <div className="blurb__image--container-right">
        <img className="blurb__image" src={props.blurbImage2}/>
      </div>
    </div>
  )
}

export const renderNavbar = handleShowMobileNav => {
  return (
    <header className="main-header" onClick={handleShowMobileNav}>
      <button class="toggle-button">
          <span class="toggle-button__bar"></span>
          <span class="toggle-button__bar"></span>
          <span class="toggle-button__bar"></span>
      </button>
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
export const renderMobileNav = handleShowMobileNav => {
  return (
    <header className="main-header" onClick={handleShowMobileNav}>
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
