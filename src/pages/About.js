import React, { Fragment } from 'react'

import Blurb from '../components/Blurb'
import Footer from '../components/Footer'
import { developerDescription } from '../Constants'

const About = () => {
  return (
    <Fragment>
      <Blurb
        title="Full Stack Web Developer"
        description={developerDescription}
        blurbImage="/images/pictures/atComputer.jpg"
      />
      <div className="blurb">
      <div className="blurb__image--container">
        <img className="image" src="/images/pictures/teacher.jpg"/>
      </div>
        <div className="blurb__info">
          <h2 className="blurb__title">
            Teacher
          </h2>
          <p className="blurb__text">
            Prior to becoming a developer, I was an elementary school teacher for the School District of Osceola County and NYC Department of Education.
          </p>
        </div>
      </div>
      <div className="blurb">
        <div className="blurb__info">
          <h2 className="blurb__title">
            Aquatics Director
          </h2>
          <p className="blurb__text">
            Aquatics Director, YMCA.
          </p>
        </div>
        <div className="blurb__image--container">
          <img className="image" src="/images/pictures/aqDir.jpg"/>
        </div>
      </div>
      <div className="blurb">
        <div className="blurb__image--container">
          <img className="image" src="/images/pictures/running.jpg"/>
        </div>
        <div className="blurb__info">
          <h2 className="blurb__title">
            Running
          </h2>
          <p className="blurb__text">
            Running.
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default About
