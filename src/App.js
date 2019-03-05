import React, { Component } from 'react'

import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        In App
        <About />
        <Projects />
        <Blog />
      </div>
    )
  }
}

export default App
