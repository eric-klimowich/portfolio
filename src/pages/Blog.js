import React, { Component } from 'react'

import BlogEntry from './BlogEntry'

class Blog extends Component {

  state = {
    blogs: []
  }

  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eric.klimowich')
      .then(res => res.json())
      .then(blogs => this.setState({ blogs: blogs.items }))
  }

  render() {
    // console.log(this.state.blogs)
    return (
      <div>
        This app is about my blog.
        {this.state.blogs.map(entry => <BlogEntry key={entry.pubDate} entry={entry} />)}
      </div>
    )
  }
}

export default Blog
