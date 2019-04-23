import React from 'react'

import * as Functions from '../Functions'

const Project = props => {
  // console.log(props)
  return (
    <div className="project">
      <h1 className="project__title">Teachers Helping Teachers</h1>
      <img className="project__screenshot" src={props.screenshot} />
      <p className="project__description">
        {props.description}
      </p>
      <ul className="project__links">
        {props.githubLink ? Functions.renderSingleGitRepo(props) : Functions.renderFrontAndBackGitRepo(props)}
        <li className="project__link-container">
          <a
            className="project__link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.demoLink}
          >
          <img className="youtube-image" src="/images/logos/yt_icon_rgb.png" alt=""/>
            Demo
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Project
