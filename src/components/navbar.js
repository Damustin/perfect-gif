import React from "react";
import { Link } from "react-router-dom";


export default class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        return(
            <nav className="navbar navbar-expand-md navbar-dark row fixed-top">
          <div className=" cool-12 d-flex align-items-center">
            <img src="/logoblack.png" alt="logo" className="navbar-logo mx-5" />
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto  mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link mx-3 active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3 active" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3 active" to="/payment">
                    Payments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3 active" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        )
    }
}