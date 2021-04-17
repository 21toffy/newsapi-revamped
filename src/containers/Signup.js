import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { signup } from "../actions/auth";

const Signup = ({ signup, isAuthenticated, loading }) => {
  const [requestSent, setRequestsent] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    re_password: "",
  });

  console.log(loading);
  const { email, username, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setRequestsent(true);

    signup(email, username, password, re_password);
    // sleep(2)
    setRequestsent(false)
  };

  const click = (e) => {
    console.log(requestSent);
    setRequestsent(!requestSent);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (loading == false) {
    return <Redirect to="/login" />;
  }

  return (



    <div className="" style={{ background: "#eeeef1", height: "600px"}}>
    <br />
    <br />
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div class="card ">
        <div class="card-body">
          <h4 class="card-title">Signup</h4>
          <small className="pb-5">Signup to get API key</small>

          <br />
          <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
          <br />
          <input
            className="form-control"
            type="password"
            placeholder="confirm Password"
            name="re_password"
            value={re_password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>

        {requestSent ? (
          <div class="spinner-border text-secondary text-sm" role="status">
            <span class="sr-only">signing up...</span>
          </div>
        ) : (
          <button className="btn btn-primary btn-block" type="submit">Signup</button>
        )}
      </form>
      <p className="mt-3 small">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <p className="mt-3 small">
        Forgot your password? <Link to="reset-password">Reset Password</Link>
      </p>
        </div>
      </div>
        </div>
      </div>

     
    </div>
  </div>










  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { signup })(Signup);
