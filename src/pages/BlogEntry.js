import React from 'react'

import BlogCategory from './BlogCategory'

const BlogEntry = props => {
  console.log(props)
  return (
    <div>
      {props.entry.title}
      {props.entry.categories.map(category => <BlogCategory category={category} />)}
      {props.entry.description.slice(0, 200).replace(/<p>|<h3>|<\/p>|<\/h3>/g, '')}
      <a>more...</a>
    </div>
  )
}

export default BlogEntry

// <img src={props.entry.thumbnail} />
