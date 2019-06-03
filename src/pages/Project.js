import React from 'react'

import * as Functions from '../Functions'

const Project = props => {
  // console.log(props)
  return (
    <div className="project">
      <h1 className="project__title">{props.title}</h1>
      <div className="project__screenshot-container">
        <img
          className="project__screenshot"
          src={props.screenshot}
          alt={props.altScreenshot}
        />
      </div>
      <div className="project__description-container">
        <p className="project__description">
          {props.description}
        </p>
      </div>
      <div className="project__links-container">
        <ul className="project__links">
          {props.githubLink ? Functions.renderSingleGitRepo(props) : Functions.renderFrontAndBackGitRepo(props)}
          <li className="project__link-container">
            <a
              className="project__link"
              target="_blank"
              rel="noopener noreferrer"
              href={props.demoLink}
            >
            <img className="youtube-image" src="/images/logos/yt_icon_rgb.png" alt={props.altDescription}/>
              Demo
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Project
