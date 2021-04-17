import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../actions/auth";

const Login = ({ login, isAuthenticated }) => {

  const [requestSent, setRequestsent] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setRequestsent(!requestSent);
    console.log(requestSent, "first")
    login(email, password);
    //Is the user authenticated?
    //Redirect to the home page
    setRequestsent(false);
    console.log(requestSent)


  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
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
            <h4 class="card-title">Login</h4>
            <form onSubmit={(e) => onSubmit(e)}>
              <div class="form-group">
                <label for="email">E-Mail Address</label>
                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="6"
                  required
                />{" "}
                <div class="text-right">
                Forgot your password? <Link className="small" to="/reset-password">Reset Password</Link>

                </div>
              </div>

              <div class="form-group">
                <div class="form-check position-relative mb-2">
                  <input
                    type="checkbox"
                    class="form-check-input d-none"
                    id="remember"
                    name="remember"
                  />
                  
                </div>
              </div>

              <div class="form-group no-margin">
              {requestSent ? (
            <div class="spinner-border text-secondary text-sm" role="status">
              <span class="sr-only">loging in...</span>
            </div>
          ) : (
            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>
          )}
          
               
              </div>
              <div class="text-center mt-3 small">
              Don't have an account? <Link to="signup">Sign Up</Link>
              </div>
            </form>
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
});

export default connect(mapStateToProps, { login })(Login);
