import React, { Fragment } from 'react'

import Blurb from '../components/Blurb'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Fragment>
      <Blurb
        title="Me"
        description="Welcome to my website, the place to go for all things Eric Klimowich."
        blurbImage="/images/pictures/profile_picture.jpg"
      />
    </Fragment>
  )
}

export default Home
