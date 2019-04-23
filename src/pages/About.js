import React, { Fragment } from 'react'

import Footer from '../components/Footer'

const About = () => {
  return (
    <Fragment>
      <div className="image">
        <img
          className="profile-image"
          src="/images/pictures/profile_picture.jpg"
          alt="Eric's Profile"
        />
      </div>
      <div className="bio">
        <p>
          Hi, I'm Eric. I'm a full stack developer with a passion for creating stuff.
        </p>
        <p>
          Prior to programming, I spent 16 years in the not-for-profit world and a year in education.
        </p>
        <p>
          All of these roles were people focused and I've brought that people-first mentality with me to the tech world. Overlap between program management, teaching, planning, and stuff.
        </p>
        <p>
          When I'm not coding, I love going to sporting events, running, other stuff. Otherwise, I'm probably snuggling with my cats, Jack, Walter, Penny, and Olivia.
        </p>
      </div>
    <Footer />
    </Fragment>
  )
}

export default About
