import React, { Fragment } from 'react'

import Footer from '../components/Footer'
import Project from './Project'

import * as Constants from '../Constants'

const Projects = () => {
  return (
    <Fragment>
      <div className="projects-background"></div>
      <h1 className="projects-title">My projects</h1>
      <Project
        description={Constants.teachersApp}
        frontEndLink={"https://github.com/eric-klimowich/teachers_help_teachers_frontend"}
        backEndLink={"https://github.com/eric-klimowich/teachers_help_teachers_backend"}
        demoLink={"https://youtu.be/UeN8Hmvk0MU"}
      />
      <Project
        description={Constants.kittyKardApp}
        frontEndLink={"https://github.com/eric-klimowich/matcher_frontend"}
        backEndLink={"https://github.com/eric-klimowich/matcher_backend"}
        demoLink={"https://youtu.be/gouFYgQcbLc"}
      />
      <Project
        description={Constants.tvTrackerApp}
        githubLink={"https://github.com/eric-klimowich/tv-tracker"}
        demoLink={"https://youtu.be/5Sm3BdEotU4"}
      />
    <Footer />
    </Fragment>

  )
}

export default Projects
