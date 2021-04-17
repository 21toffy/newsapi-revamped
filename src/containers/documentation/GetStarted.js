import React from "react";
import SideNav from "../../components/SideNav";
import { Link } from "react-router-dom";
import get from '../../img/get-started.png'

const GetStarted = () => {
  return (
    <SideNav>
      <div className="container">
        <h2>Getting started</h2>
        <h6>
          To get started you'll need an API key. They're free for development,
          open-source, and non-commercial use and you can get one from here
        </h6>
        <h6>
          you also need to know that there are basically two plans (developer
          and Advanced) and for the developer plan each you will have a limited
          number of requests per day. The number of requests made varies from
          day to day depending on the total number of requests made the previous
          day. but a guaranteed 400 request and may be more.
        </h6>
        <h6>
          Also we're assuming you know how to make web requests in your chosen
          programming language. We've included an example below if you need a
          place to start. here we are tying to get all of todays posts from
          punch news paper. its that easy!!!
        </h6>
        <br />  
        <img src={get}>
        </img>
      </div>
    </SideNav>
  );
};

export default GetStarted;
