import React, { Component } from 'react'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom'
import { renderNavbar } from '../Functions'
import { renderMobileNav } from '../Functions'

class Navbar extends Component {

  state = {
    showMobileNav: false
  }

  handleShowMobileNav = () => {
    this.setState({
      showMobileNav: !this.state.showMobileNav
    })
  }

  render() {
    return (
      this.state.showMobileNav ? renderMobileNav(this.handleShowMobileNav) : renderNavbar(this.handleShowMobileNav)
    )
  }
}

export default Navbar
