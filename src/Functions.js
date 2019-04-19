import React, { Fragment } from 'react'

export const renderFrontAndBackGitRepo = props => {
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

export const renderSingleGitRepo = props => {
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
