import React from 'react'

const BlogCategory = props => {
  // console.log(props)
  return (
      <li className="blog-category">{props.category}</li>
  )
}

export default BlogCategory
