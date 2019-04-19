import React from 'react'

import { renderLinkWithPageOpen } from '../Functions'
import { renderLinkWithoutPageOpen } from '../Functions'

const Link = props => {
  console.log(props)
  return (
    props.link.includes('mailto') ? renderLinkWithoutPageOpen(props) : renderLinkWithPageOpen(props)
  )
}

export default Link
