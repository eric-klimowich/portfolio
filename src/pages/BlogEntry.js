import React from 'react'
import uuid from 'uuid'

import BlogCategory from './BlogCategory'

const BlogEntry = props => {
  // console.log(props)
  return (
    <div className="blog">
      <h1 className="blog-title">{props.entry.title}</h1>
      <div className="blog-description">
        {props.entry.description.slice(0, 200).replace(/<.*>/g, '')}
        <a className="blog-link"
          target="_blank"
          rel="noopener noreferrer"
          href={props.entry.link}>
          ... (more)
        </a>
      </div>
      <div className="blog-categories-container">
        <h2 className="blog-categories__heading">Topic(s)</h2>
        <ul className="blog-categories">
          {props.entry.categories.map(category => <BlogCategory key={uuid.v4()} category={category} />)}
        </ul>
      </div>
    </div>
  )
}

export default BlogEntry

// <img src={props.entry.thumbnail} />
