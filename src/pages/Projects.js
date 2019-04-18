import React, { Fragment } from 'react'

import Footer from '../Footer'

const Projects = () => {
  return (
    <Fragment>
      <h1 className="projects-title">My projects</h1>
      <div className="project">
        <h1 className="project__title">Teachers Helping Teachers</h1>
        <p className="project__description">
          Teachers Helping Teachers is a file-share application that allows teachers to upload or download lesson plans for free. While there are a number of sites and applications that exits with this capability, many are pay-per-lesson or subscription based. As a former teacher, I wanted to create this app to allow the free flow of ideas to assist new and veteran teachers alike, allowing new teachers to learn and veterans to share their wealth of knowledge.
        </p>
        <ul className="project__links">
          <li className="project__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eric-klimowich/teachers_help_teachers_frontend"
            >
              <img className="b-and-w-octocat-image" src="/images/GitHub-Mark-120px-plus.png" alt=""/> - Front End
            </a>
          </li>
          <li className="project__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eric-klimowich/teachers_help_teachers_backend"
            >
              <img className="b-and-w-octocat-image" src="/images/GitHub-Mark-120px-plus.png" alt=""/> - Back End
            </a>
          </li>
          <li className="project__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/UeN8Hmvk0MU"
            >
              Demo
            </a>
          </li>
        </ul>
      </div>
      <div className="project">
        <h1 className="project__title">Kitty Kard Matching</h1>
        <p className="project__description">
          Kitty Kard Matching is a game for fans of cats and the old card game Memory. Users enter their name and then click on cards to "flip" them, revealing pictures of cats. Users try to complete matches as quickly as possible. A timer begins at the start of the game and stops upon completion of the final match. The user's time is their final score and is then displayed among the best times.
        </p>
        <ul className="project__links">
          <li className="project__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eric-klimowich/matcher_frontend"
            >
              <img className="b-and-w-octocat-image" src="/images/GitHub-Mark-120px-plus.png" alt=""/> - Front End
            </a>
          </li>
          <li className="project__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eric-klimowich/matcher_backend"
            >
              <img className="b-and-w-octocat-image" src="/images/GitHub-Mark-120px-plus.png" alt=""/> - Back End
            </a>
          </li>
          <li className="project__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/gouFYgQcbLc"
            >
              Demo
            </a>
          </li>
        </ul>
      </div>
      <div className="project">
        <h1 className="project__title">TV Tracker</h1>
        <p className="project__description">
          TV Tracker is an application in which users can record and track the television series they are watching. Users can log individual shows, what season and episode they are currently on, and whether a show is on the to watch list, being currently watched, or is completed. Shows can be viewed based on what entertainment platform they are on and analytics let users compare platforms. Users can evaluate whether platforms in use are cost effective.
        </p>
        <ul className="project__links">
          <li className="project__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eric-klimowich/tv-tracker"
            >
              <img className="b-and-w-octocat-image" src="/images/GitHub-Mark-120px-plus.png" alt=""/>
            </a>
          </li>
          <li className="project__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/5Sm3BdEotU4"
            >
              Demo
            </a>
          </li>
        </ul>
      </div>
    <Footer />
    </Fragment>

  )
}

export default Projects
