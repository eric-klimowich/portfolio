import React from 'react'

import { renderBlurbPicLeft, renderBlurbPicRight } from '../Functions'

const Blurb = props => {
  // console.log(props)
  return props.picLeft ? renderBlurbPicLeft(props) : renderBlurbPicRight(props)
}

export default Blurb
