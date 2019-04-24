import React, { Fragment } from 'react'

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
        <img className="b-and-w-octocat-image" src="/images/logos/GitHub-Mark-120px-plus.png" alt=""/> - Front End
      </a>
    </li>
    <li className="project__link-container">
      <a
        className="project__link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.backEndLink}
      >
        <img className="b-and-w-octocat-image" src="/images/logos/GitHub-Mark-120px-plus.png" alt=""/> - Back End
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
        <img className="image" src={props.blurbImage}/>
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
        <img className="image" src={props.blurbImage}/>
      </div>
    </div>
  )
}
