import React, { Fragment } from 'react'

const Projects = () => {
  return (
    <Fragment>
      <div>
        <h1>Teachers Helping Teachers</h1>
        <p>
          Teachers Helping Teachers is a file-share application that allows teachers to upload or download lesson plans for free. While there are a number of sites and applications that exits with this capability, many are pay-per-lesson or subscription based. As a former teacher, I wanted to create this app to allow the free flow of ideas to assist new and veteran teachers alike, allowing new teachers to learn and veterans to share their wealth of knowledge.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eric-klimowich/teachers_help_teachers_frontend"
        >
          Github - Front End
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eric-klimowich/teachers_help_teachers_backend"
        >
          Github - Back End
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/UeN8Hmvk0MU"
        >
          Demo
        </a>
      </div>
      <div>
        <h1>Kitty Kard Matching</h1>
        <p>
          Kitty Kard Matching is a game for fans of cats and the old card game Memory. Users enter their name and then click on cards to "flip" them, revealing pictures of cats. Users try to complete matches as quickly as possible. A timer begins at the start of the game and stops upon completion of the final match. The user's time is their final score and is then displayed among the best times.
        </p>
      </div>
      <div>
        <h1>TV Tracker</h1>
        <p>
          TV Tracker is an application in which users can record and track the television series they are watching. Users can log individual shows, what season and episode they are currently on, and whether a show is on the to watch list, being currently watched, or is completed. Shows can be viewed based on what entertainment platform they are on and analytics let users compare platforms. Users can evaluate whether platforms in use are cost effective.
        </p>
      </div>
    </Fragment>

  )
}

export default Projects
