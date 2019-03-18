import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './Navbar'
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
            <Navbar />
            <div>
              Eric Klimowich
            </div>
            <a href="https://github.com/eric-klimowich" >
              <i className="ui github icon" ></i>
            </a>
            <a href="https://www.linkedin.com/in/eric-klimowich-523a8a56/" >
              <i className="ui linkedin icon" ></i>
            </a>
            <a href="https://medium.com/@eric.klimowich" >
              <i className="ui medium icon" ></i>
            </a>
            <a href="mailto:eric.klimowich@gmail.com" >
              <i className="ui envelope icon" ></i>
            </a>
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
