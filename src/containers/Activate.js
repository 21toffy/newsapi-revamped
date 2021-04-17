import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { verify } from "../actions/auth";

const Activate = ({ match, verify, loading }) => {
  const [verified, setVerified] = useState(false);

  const verifyAccount = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (loading == false) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container mt-5">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: "200px" }}
      >
        <h1>Verify your account</h1>
        
        <button
          onClick={verifyAccount}
          style={{ marginTop: "50px" }}
          className="btn btn-primary"
          type="submit"
        >Verify</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { verify })(Activate);
