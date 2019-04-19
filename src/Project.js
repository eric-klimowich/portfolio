import React, { Fragment } from 'react'

const renderFrontAndBackGitRepo = props => {
  return (
    <Fragment>
    <li className="project__link">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.frontEndLink}
      >
        <img className="b-and-w-octocat-image" src="/images/GitHub-Mark-120px-plus.png" alt=""/> - Front End
      </a>
    </li>
    <li className="project__link">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.backEndLink}
      >
        <img className="b-and-w-octocat-image" src="/images/GitHub-Mark-120px-plus.png" alt=""/> - Back End
      </a>
    </li>
    </Fragment>
  )
}

const renderSingleGitRepo = props => {
  return (
    <li className="project__link">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.githubLink}
      >
        <img className="b-and-w-octocat-image" src="/images/GitHub-Mark-120px-plus.png" alt=""/>
      </a>
    </li>
  )
}

const Project = props => {
  console.log(props)
  return (
    <div className="project">
      <h1 className="project__title">Teachers Helping Teachers</h1>
      <p className="project__description">
        {props.description}
      </p>
      <ul className="project__links">
        {props.githubLink ? renderSingleGitRepo(props) : renderFrontAndBackGitRepo(props)}
        <li className="project__link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.demoLink}
          >
          <img className="youtube-image" src="/images/yt_icon_rgb.png" alt=""/>
            Demo
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Project
