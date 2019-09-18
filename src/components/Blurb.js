import React, { Component } from 'react'

import $ from 'jquery'

import { renderBlurbPicLeft, renderBlurbPicRight, renderBlurbPicBoth } from '../Functions'

class Blurb extends Component {

  componentDidMount() {
    $(".blurb__title--left").fadeOut(2000)
  }

  render() {
    return (
      <div className="blurb">
        <div className="blurb__info--left">
          <h1 className="blurb__title--left">
            {this.props.title}
          </h1>
          <p className="blurb__text--left">
            {this.props.description}
          </p>
        </div>
        <div className="blurb__image--container">
          <img className="blurb__image" src={this.props.blurbImage} alt={this.props.altImage}/>
        </div>
      </div>
    )
  }
}

export default Blurb

// return props.blurbImage2 ? renderBlurbPicBoth(props) : props.picLeft ? renderBlurbPicLeft(props) : renderBlurbPicRight(props)
