import React from "react"
import { NavLink } from "react-router-dom"


const Navigation = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">React-Router</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
    )

}

export default Navigation
