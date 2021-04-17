import React from "react";
import SideNav from "../../components/SideNav";
import { Link } from "react-router-dom";

const Authentication = () => {
  return (
    <SideNav>
      <div className="container">
        <h2>Authentication</h2>
        <h6>Authentication is handled with a simple API key.</h6>
        <h6>You only attach your API key to a request Via the apiKey querystring parameter.
</h6>
        <h6>
        If you don't append your API key correctly, or your API key is invalid, you will receive a<strong> 400 - invalid credentials error.</strong>

        </h6>
      </div>
    </SideNav>
  );
};

export default Authentication;
