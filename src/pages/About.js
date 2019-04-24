import React, { Fragment } from 'react'

import Footer from '../components/Footer'

const About = () => {
  return (
    <Fragment>
      <div className="blurb">
        <div className="blurb__info">
          <h2 className="blurb__title">
            Full Stack Web Developer
          </h2>
          <p className="blurb__text">
            Hi, I'm Eric. I'm a full stack developer with a passion for education and working with communities. Utilizing my experience in Ruby on Rails, JavaScript, and React, I have built applications that streamline file sharing for teachers and track consumers’ usages. My background includes serving as a general education teacher and intervention specialist, as well as having a proven ability to manage and develop programs, staff, and budgets, effectively increasing revenue of non-profit organizations. As a developer, I hope to contribute to companies that invest in their communities, foster a diverse environment, and maintain a healthy fiscal and social approach.
          </p>
        </div>
        <div className="blurb__image--container">
          <img className="image" src="/images/pictures/atComputer.jpg"/>
        </div>
      </div>
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
