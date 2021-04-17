

import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { reset_password_confirm } from "../actions/auth";
import { store } from "react-notifications-component";



const ResetPasswordConfirm = ({match,reset_password_confirm, verified}) => {
    const [requestSent, setRequestsent] = useState(false);

  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password:''
  });
console.log(verified)
  const { new_password, re_new_password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setRequestsent(true);
    const uid = match.params.uid;
    const token = match.params.token;
    if(new_password == " " || re_new_password == " "){
      store.addNotification({
        title: "Fields can not be empty!",
        message: "Enter appropriate data",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });

    }else if(new_password != re_new_password){
      store.addNotification({
        title: "Passwords do not match",
        message: "Input similar  data for both fields",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      setRequestsent(false);
    }else{
      setRequestsent(true)
      reset_password_confirm(uid, token, new_password, re_new_password);
      setRequestsent(false)

    }
  };

  if(verified){
    return <Redirect  to="/" />
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
            <h4 class="card-title">Reset Password</h4>
            <form onSubmit={(e) => onSubmit(e)}>
              <div class="form-group">
                <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="new_password"
            value={new_password}
            onChange={e => onChange(e)}
            minLength="6"
            required
          />
         
              </div>

              <div class="form-group">
                <input
            className="form-control mb-3"
            type="password"
            placeholder="confirm password"
            name="re_new_password"
            value={re_new_password}
            onChange={e => onChange(e)}
            required
          />
                <div class="text-right">
                Forgot your password? <Link className="small" to="reset-password">Reset Password</Link>

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
            <span class="sr-only">confirming...</span>
          </div>
        ) : (
          <button className="btn btn-primary" type="submit">Confirm</button>
        )}
               
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
  verified: state.auth.verified,
});

export default connect(mapStateToProps, {reset_password_confirm})(ResetPasswordConfirm);