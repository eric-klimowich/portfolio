import { renderLinkWithPageOpen, renderLinkWithoutPageOpen } from '../Functions'

const Link = props => {
  // console.log(props)
  return (
    props.link.includes('mailto') ? renderLinkWithoutPageOpen(props) : renderLinkWithPageOpen(props)
  )
}

export default Link
