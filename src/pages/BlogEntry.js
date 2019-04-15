import React from 'react'
import uuid from 'uuid'

import BlogCategory from './BlogCategory'

const BlogEntry = props => {
  // console.log(props)
  return (
    <div>
      {props.entry.title}
      {props.entry.categories.map(category => <BlogCategory key={uuid.v4()} category={category} />)}
      {props.entry.description.slice(0, 110).replace(/<p>|<h3>|<\/p>|<\/h3>/g, '')}
      <a target="_blank" rel="noopener noreferrer" href={props.entry.link}>
        (more...)
      </a>
    </div>
  )
}

export default BlogEntry

// <img src={props.entry.thumbnail} />
