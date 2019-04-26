import React, { Fragment } from 'react'

import Blurb from '../components/Blurb'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Fragment>
      <h1>This website is about me!</h1>
      <Blurb
        picLeft="True"
        title="Me"
        description="Welcome to my website, the place to go for all things Eric Klimowich."
        blurbImage="/images/pictures/profile_picture.jpg"
      />
      <Footer />
    </Fragment>
  )
}

export default Home
