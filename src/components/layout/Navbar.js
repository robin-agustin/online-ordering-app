import React, { Component } from 'react'
import CartIcon from '../cart/CartIcon'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar scrolled">
        <div className="container">
          <Link to="/">
            <button
              type="button"
              className="btn btn-link navbar-brand">
              TEST
            </button>
          </Link>
          <CartIcon />
        </div>
      </nav>
    )
  }
}

export default Navbar
