import React from 'react'

const BlogEntry = props => {
  console.log(props)
  return (
    <div>
      {props.entry.title}
    </div>
  )
}

export default BlogEntry

// <img src={props.entry.thumbnail} />
