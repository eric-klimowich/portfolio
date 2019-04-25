import React from 'react'

import { renderBlurbPicLeft, renderBlurbPicRight, renderBlurbPicBoth } from '../Functions'

const Blurb = props => {
  // console.log(props)
  return props.blurbImage2 ? renderBlurbPicBoth(props) : props.picLeft ? renderBlurbPicLeft(props) : renderBlurbPicRight(props)
}

export default Blurb
