import React, { Fragment } from 'react'

import Blurb from '../components/Blurb'
import Footer from '../components/Footer'
import { developerDescription, teacherDescription, directorDescription, runnerDescription } from '../Constants'

const About = () => {
  return (
    <Fragment>
      <h1 className="about-title">About Me</h1>
      <Blurb
        title="Full Stack Web Developer"
        description={developerDescription}
        blurbImage="/images/pictures/atComputer.jpg"
      />
      <Blurb
        picLeft="True"
        title="Teacher"
        description={teacherDescription}
        blurbImage="/images/pictures/teacher.jpg"
      />
      <Blurb
        title="Program Director"
        description={directorDescription}
        blurbImage="/images/pictures/aqDir.jpg"
      />
      <Blurb
        picLeft="True"
        title="Runner"
        description={runnerDescription}
        blurbImage="/images/pictures/running.jpg"
      />
      <Footer />
    </Fragment>
  )
}

export default About
