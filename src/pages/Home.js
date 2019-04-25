import React, { Fragment } from 'react'

import Footer from '../components/Footer'

const Home = () => {
  return (
    <Fragment>
      <h1>This website is about me!</h1>
      <div className="blurb">
        <div className="blurb__image--container">
          <img className="image" src="images/pictures/profile_picture.jpg"/>
        </div>
        <div className="blurb__info">
          <h1 className="blurb__title">
            Hi!
          </h1>
          <p className="blurb__text">
            Welcome to my website, the place to go for all things Eric Klimowich.
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home
