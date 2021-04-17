import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";
import { logout } from "../actions/auth";

const Navbar = ({ logout, isAuthenticated }) => {
  console.log(isAuthenticated);
  const guestLinks = () => (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Signup
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </>
  );

  const authLinks = () => (
    <>
    <li className="nav-item">
      <Link className="nav-link" to="dashboard">
        Dashboard
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" onClick={logout} to="">
        Logout
      </Link>
    </li>
    </>
  );

  return (
    <nav
      class="navbar navbar-expand-lg fixed-top py-3 navbar-light"
      id="mainNav"
    >
      <div class="container">
        {" "}
        <Link class="navbar-brand js-scroll-trigger" to="/">
          (9ja News Api)
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span class="navbar-toggler-icon"></span>{" "}
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/docs/intro">
                Docs
              </Link>
            </li>

            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/">
    //     News Api
    //   </Link>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">

    //       {isAuthenticated? authLinks() : guestLinks()}
    //     </ul>

    //   </div>
    // </nav>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
