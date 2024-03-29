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
        <img className="b-and-w-octocat-image" src="/images/logos/GitHub-Mark-120px-plus.png" alt=""/>
        <p>Front End</p>
      </a>
    </li>
    <li className="project__link-container">
      <a
        className="project__link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.backEndLink}
      >
        <img className="b-and-w-octocat-image" src="/images/logos/GitHub-Mark-120px-plus.png" alt=""/>
        <p>Back End</p>
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
        <p>Repo</p>
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
        <img className="blurb__image" src={props.blurbImage} alt={props.altImage}/>
      </div>
      <div className="blurb__info--right">
        <h1 className="blurb__title--right">
          {props.title}
        </h1>
        <p className="blurb__text--right">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export const renderBlurbPicRight = props => {
  return (
    <div className="blurb">
      <div className="blurb__info--left">
        <h1 className="blurb__title--left">
          {props.title}
        </h1>
        <p className="blurb__text--left">
          {props.description}
        </p>
      </div>
      <div className="blurb__image--container">
        <img className="blurb__image" src={props.blurbImage} alt={props.altImage}/>
      </div>
    </div>
  )
}

export const renderBlurbPicBoth = props => {
  return (
    <div className="blurb">
      <div className="blurb__image--container-left">
        <img className="blurb__image" src={props.blurbImage} alt={props.altImage}/>
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
        <img className="blurb__image" src={props.blurbImage2} alt={props.altImage2}/>
      </div>
    </div>
  )
}

export const renderNavbar = handleShowMobileNav => {
  return (
    <header className="main-header">
      <button className="toggle-button" onClick={handleShowMobileNav}>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
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
              href="https://drive.google.com/file/d/1UQ59HVKDNGwJnsyDXoH7qipwRLrwi0P7/view?usp=sharing"
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
      <button className="toggle-button">
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
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
              href="https://drive.google.com/file/d/1UQ59HVKDNGwJnsyDXoH7qipwRLrwi0P7/view?usp=sharing"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
