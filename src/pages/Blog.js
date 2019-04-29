import React, { Component, Fragment } from 'react'

import BlogEntry from './BlogEntry'
import Footer from '../components/Footer'

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
    console.log(this.state.blogs)
    return (
      <Fragment>
        <div className="blogs-background"></div>
        <h1 className="blogs-title">My blogs</h1>
        {this.state.blogs.map(entry => <BlogEntry key={entry.pubDate} entry={entry} />)}
      <Footer />
      </Fragment>
    )
  }
}

export default Blog
