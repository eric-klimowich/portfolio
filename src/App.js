import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/blog" exact component={Blog} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
