import React from 'react'

const Blurb = props => {
  // console.log(props)
  return (
    <div className="blurb">
      <div className="blurb__info">
        <h1 className="blurb__title">
          {props.title}
        </h1>
        <p className="blurb__text">
          {props.description}
        </p>
      </div>
      <div className="blurb__image--container">
        <img className="image" src={props.blurbImage}/>
      </div>
    </div>
  )
}

export default Blurb
