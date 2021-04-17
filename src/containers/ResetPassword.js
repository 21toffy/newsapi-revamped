import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { reset_password } from "../actions/auth";
import { findAllByTestId } from "@testing-library/react";

const ResetPassword = ({ reset_password, success }) => {
  const [requestSent, setRequestsent] = useState(false);
  console.log(success);
  const [formData, setFormData] = useState({
    email: "",
  });
  useEffect(() => {
    setRequestsent(false);
    // success(false)
  }, []);
  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setRequestsent(true);

    reset_password(email);
    setRequestsent(false);
  };

  if (success) {
    return <Redirect to="/" />;
  }

  return (
    <div className="" style={{ background: "#eeeef1", height: "600px" }}>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div class="card ">
              <div class="card-body">
                <h4> Reset Password </h4>
                <small>Enter email address associated with account</small>
                <form onSubmit={(e) => onSubmit(e)}>
                  <div class="form-group">
                    {/* <label for="email">E-Mail Address</label> */}
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
                      <div
                        class="spinner-border text-secondary text-sm"
                        role="status"
                      >
                        <span class="sr-only">Reset password</span>
                      </div>
                    ) : (
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Reset password
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
  success: state.auth.success,
});

export default connect(mapStateToProps, { reset_password })(ResetPassword);
