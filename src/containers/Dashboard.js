import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { load_user_profile } from "../actions/auth";

const Dashboard = ({ load_user_profile, isAuthenticated, profile }) => {
  useEffect(() => {
    load_user_profile();
    // isAuthenticated
    // profile
  }, []);
  console.log(profile);
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container pt-3">
      <div className="row pt-5">
        <div class="col-md-6 offset-md-3">
          <div class="card card-profile card-secondary">
            <div class="card-header"></div>
            <div class="card-body">
              <div class="user-profile text-center">
                <div class="name">{profile?.serializer?.user.name}</div>
                <div class="job">{profile?.serializer?.user.email}</div>
                <div class="desc">{profile?.serializer?.pk}</div>

                {/* <div class="view-profile">
                  <a href="#" class="btn text-light btn-secondary btn-block">
                    View Full Profile
                  </a>
                </div> */}
                <br />
                <hr />

                <div class="single-pro-cn">
                  <h3>OVERVIEW</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row user-stats text-center">
                <div class="col">
                  <div class="number">125</div>
                  <div class="title">Total</div>
                </div>
                <div class="col">
                  <div class="number">today</div>

                  <div class="title">
                    {profile?.serializer?.no_of_requests}
                  </div>
                </div>
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
  profile: state.auth.profile,
});

export default connect(mapStateToProps, { load_user_profile })(Dashboard);
