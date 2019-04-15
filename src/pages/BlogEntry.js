import React from 'react'

import BlogCategory from './BlogCategory'

const BlogEntry = props => {
  console.log(props.entry.pubDate)
  return (
    <div>
      {props.entry.title}
      {props.entry.categories.map(category => <BlogCategory category={category} />)}
      {props.entry.description.slice(0, 110).replace(/<p>|<h3>|<\/p>|<\/h3>/g, '')}
      <a target="_blank" rel="noopener noreferrer" href={props.entry.link}>
        (more...)
      </a>
    </div>
  )
}

export default BlogEntry

// <img src={props.entry.thumbnail} />
