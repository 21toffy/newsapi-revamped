import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import _1 from "../img/1.png";
import _blob from "../img/blob-shape-1.svg";
import _person from "../img/person.png";
import _header from "../img/header-img.png";
import { connect } from "react-redux";

// import _1 from "../img/1.png";
// import _1 from "../img/1.png";
// import _1 from "../img/1.png";

const Home = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  return (
    <div className=" pt-5">
      <header class="header">
        <div class="shape-wrap shape-header">
          <img src={_blob} alt="" />
        </div>
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-md-5">
              <div class="headline">
                <div class="headline-content">
                  <h1 class="headline-title">Search Nigerian news with code</h1>
                  <p class="lead">
                    Get Nigerian based news headlines, and search for articles
                    from news sources in Nigeria!
                  </p>
                  {isAuthenticated ? (
                    <Link
                      className="btn btn-light btn-lg align-items-center"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      className="btn btn-light btn-lg align-items-center"
                      to="/signup"
                    >
                      Get API Key
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div class="col-md-7">
              {" "}
              <img src={_header} alt="" class="img-fluid pt-5" />{" "}
              {/* <img src={_person} class="img-fluid person-img" class="img-fluid" />{" "} */}
            </div>
          </div>
        </div>
      </header>
      {/* <div className="jumbotron pt-5">
    <h1 className="display-4">News Api</h1>
    <p className="lead">Get Nigerian news at the tip of your fingeres</p>
    <hr className="my-4" />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <p className="lead">
      <Link className="btn btn-primary" to="/login">Login</Link>
    </p>
  </div> */}

      <main role="main">
        <div class="container">
          <div class="row d-flex justify-content-start">
            <div class="col-lg-12">
              <div class="w-85 mb-5">
                <h3 class="h1"> Try free . No credit card required.</h3>
                <p class="heading -h4">make 1000 calls everyday free!</p>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <div class="card shadow">
                <div class="card-body">
                  <div class="py-3">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        focusable="false"
                        width="70"
                        height="70"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                        class="iconify"
                        data-icon="whh:lightning"
                        data-inline="false"
                        data-width="70"
                        data-height="70"
                        style={{ transform: " rotate(360deg)" }}
                      >
                        <path
                          d="M576 576l448 448l-832-384l256-192L0 0l832 384z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <h5 class="my-3">Fast and Reliable.</h5>
                    <p>
                      we offer unparalleled speed and reliability so you can
                      easily make API calls and get super-fast response. Contact
                      our friendly customer support if you run into any trouble!
                    </p>
                  </div>{" "}
                  <img
                    src="./assets/img/liramail_dribbble.jpg"
                    class="img-fluid"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow">
                <div class="card-body">
                  <div class="py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      focusable="false"
                      width="70"
                      height="70"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 64 64"
                      class="iconify"
                      data-icon="emojione-monotone:heavy-check-mark"
                      data-inline="false"
                      data-width="70"
                      data-height="70"
                      style={{ transform: " rotate(360deg)" }}
                    >
                      <path
                        d="M56 2L18.8 42.909L8 34.729H2L18.8 62L62 2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <h5 class="my-3">Make 400+ free calls per day</h5>

                    <p>
                      Register and make free api calls. Contact contact sales
                      for special use of this service on a large scale. We reply
                      within an hour.
                    </p>
                  </div>{" "}
                  <img
                    src="./assets/img/liramail_dribbble.jpg"
                    class="img-fluid"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow">
                <div class="card-body">
                  <div class="py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      width="70"
                      height="70"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      class="iconify"
                      data-icon="mdi:alphabetical-variant"
                      data-inline="false"
                      data-width="70"
                      data-height="70"
                      style={{ transform: " rotate(360deg)" }}
                    >
                      <path
                        d="M3 7a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2H3m0 2h2v2H3m12-.5V9a2 2 0 0 0-2-2H9v10h4a2 2 0 0 0 2-2v-1.5a1.54 1.54 0 0 0-1.5-1.5a1.54 1.54 0 0 0 1.5-1.5M13 15h-2v-2h2v2m0-4h-2V9h2m6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h-2v1h-2V9h2v1h2V9a2 2 0 0 0-2-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <h5 class="my-3">customizable and easy to use</h5>
                    <p>
                      9ja news API easy to customize. Get JSON results with
                      simple HTTP GET requests.
                    </p>
                  </div>{" "}
                  <img
                    src="./assets/img/liramail_dribbble.jpg"
                    class="img-fluid"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="space-md bg-light">
        <div class="container">
          <div class="row d-flex justify-content-center mb-sm-3">
            <div class="col-md-9 text-center">
              <p class="-label">Ready to Make those API calls?</p>
              <h3 class="h1 mb-4">
                Get started with 1000+ free API calls per day.
              </h3>{" "}
            </div>
          </div>

          <div class="row d-flex">
            <div class="col-md-12 mb-4 text-center">
              {!isAuthenticated ? (
                <Link
                  className="btn btn-primary btn-lg align-items-center"
                  to="/signup"
                >
                  Get API Key
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <hr class="border-2x color-10 my-0" />

      <footer class="pt-4 pb-5 bg-white position-relative">
        <div class="container">
          <div class="row">
            <div class="col-lg-auto py-4">
              <Link className="text-dark d-inline-block mb-3 mr-4" to="/documentation">
                Docs
              </Link>

              {!isAuthenticated ? (
                <Link
                  className="text-dark d-inline-block mb-3 mr-4"
                  to="/signup"
                >
                  Signup
                </Link>

                
              ) : (
                <Link
                  className="text-dark d-inline-block mb-3 mr-4"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              )}
            </div>
            <div class="col-12">
              <hr class="border-2x color-10 my-2" />{" "}
            </div>
            <div class="col-lg-auto mt-4">
              <h5 class="color-3 fw-700 mb-4">9janews Api</h5>{" "}
            </div>
            <div class="col-lg-5 mt-4">
              <p class="color-7 mb-0 pr-md-11 pr-lg-0">
                A super flexible Api service.
              </p>
            </div>
            <div class="col-lg-auto ml-lg-auto mt-4">
              
                © 2019 9ja news api
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
