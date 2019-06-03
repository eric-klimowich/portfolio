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
        altImage="Me sitting at the computer"
      />
      <Blurb
        picLeft="True"
        title="Teacher"
        description={teacherDescription}
        blurbImage="/images/pictures/teacher.jpg"
        altImage="Me teaching in the classroom"
      />
      <Blurb
        title="Program Director"
        description={directorDescription}
        blurbImage="/images/pictures/aqDir.jpg"
        altImage="Me at my YMCA"
      />
      <Blurb
        picLeft="True"
        title="Runner"
        description={runnerDescription}
        blurbImage="/images/pictures/running.jpg"
        altImage="Me finishing the NYCRUNS 2019 Queens Half Marathon"
      />
      <Blurb
        title="Comics for Life!"
        description={comicsDescription}
        blurbImage="/images/pictures/spideyAndMe.jpg"
        altImage="Me and Spidey, about 35 years ago on the left, today on the right"
      />
      <Blurb
        picLeft="True"
        title="Scuba"
        description={scubaDescription}
        blurbImage="/images/pictures/scubaSmile.png"
        altImage="Smiling about 60 feet below Grand Cayman"
      />
      <Blurb
      title="Sports!"
      description={sportsDescription}
      blurbImage="/images/pictures/throwingToFirst.png"
      altImage="Me, the 2nd baseman, making a play to 1st at 2012 NY Mets Fantasy Camp"
      blurbImage2="/images/pictures/atTheReady.png"
      altImage2="Me waiting for play to start at 2012 NY Mets Fantasy Camp"
      />
      <Footer />
    </Fragment>
  )
}

export default About
