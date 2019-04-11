import React from 'react'

import BlogCategory from './BlogCategory'

const BlogEntry = props => {
  console.log(props)
  return (
    <div>
      {props.entry.title}
      {props.entry.categories.map(category => <BlogCategory category={category} />)}
    </div>
  )
}

export default BlogEntry

// <img src={props.entry.thumbnail} />
