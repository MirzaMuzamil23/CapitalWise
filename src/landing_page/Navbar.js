import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
        <div class="container ">
          <Link class="navbar-brand" to="/">
            <img src="media/images/CaptialWise.png" alt="Logo" style={{width:"45%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Support">
                  Support
                </Link>
              </li>
              <li class="nav-item">
                 <li class="nav-item">
                <a class="nav-link active" href="#">
                  <b><i class="fa fa-bars" aria-hidden="true"></i></b>
                </a>
              </li>
              </li>
            </ul>
            </form> 
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
