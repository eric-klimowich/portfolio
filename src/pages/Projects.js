import React, { Fragment } from 'react'

import Footer from '../components/Footer'
import Project from './Project'
import * as Constants from '../descriptions'

const Projects = () => {
  return (
    <Fragment>
      <div className="projects-background"></div>
      <h1 className="projects-title">My projects</h1>
      <Project
        title="Teachers Helping Teachers"
        screenshot="images/screenshots/teacherApp.png"
        altScreenshot="Screenshot of my Teachers Helping Teachers application"
        description={Constants.teachersApp}
        frontEndLink="https://github.com/eric-klimowich/teachers_help_teachers_frontend"
        backEndLink="https://github.com/eric-klimowich/teachers_help_teachers_backend"
        demoLink="https://youtu.be/UeN8Hmvk0MU"
        altDescription="YouTube icon linking to a demo of my Teachers Helping Teachers application."
      />
      <Project
        title="Kitty Kard Matching"
        screenshot="images/screenshots/kardMatchingApp.png"
        altScreenshot="Screenshot of my Kitty Kard Matching application"
        description={Constants.kittyKardApp}
        frontEndLink="https://github.com/eric-klimowich/matcher_frontend"
        backEndLink="https://github.com/eric-klimowich/matcher_backend"
        demoLink="https://youtu.be/gouFYgQcbLc"
        altDescription="YouTube icon linking to a demo of my Kitty Kard Matching application."
      />
      <Project
        title="TV Tracker"
        screenshot="images/screenshots/tvTrackerApp.png"
        altScreenshot="Screenshot of my TV Tracker application"
        description={Constants.tvTrackerApp}
        githubLink="https://github.com/eric-klimowich/tv-tracker"
        demoLink="https://youtu.be/5Sm3BdEotU4"
        altDescription="YouTube icon linking to a demo of my TV Tracker application."
      />
    </Fragment>

  )
}

export default Projects
