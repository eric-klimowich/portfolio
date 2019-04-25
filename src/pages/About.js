import React, { Fragment } from 'react'

import Blurb from '../components/Blurb'
import Footer from '../components/Footer'
import { developerDescription, teacherDescription, directorDescription, runnerDescription, sportsDescription, scubaDescription, comicsDescription } from '../descriptions'

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
      <Blurb
        title="Comics for Life!"
        description={comicsDescription}
        blurbImage="/images/pictures/spideyAndMe.jpg"
      />
      <Blurb
        picLeft="True"
        title="Scuba"
        description={scubaDescription}
        blurbImage="/images/pictures/scubaSmile.png"
      />
      <Blurb
      title="Sports!"
      description={sportsDescription}
      blurbImage={"/images/pictures/atTheReady.png"}
      blurbImage2="/images/pictures/throwingToFirst.png"
      />
      <Footer />
    </Fragment>
  )
}

export default About
