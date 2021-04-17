import React from "react";
import SideNav from "../../components/SideNav";
import { Link } from 'react-router-dom';
import get from '../../img/error.png'


const Errors = () => {
  return (
    <SideNav>
      <div className="container">
        <h2>Introduction</h2>
        <h6>
          9jaNewsAPI is a simple HTTP REST API for searching and retrieving
          articles from News Media. you can also get articles from a specified
          list of search words articles with any combination of the following
          criteria:
        </h6>
        <ul>
          <li>
            Keyword or phrase. Eg: find articles containing the word 'Corona'.
            This is helpful if you need to get information about a certain topic
            or trend.
          </li>
          <li>
            Source name. Eg: find all breaking News from the punch NewsPaper
          </li>
          <li>
            Source domain name. Eg: find all articles published on vanguardngr
          </li>

        </ul>
        <h6>You need an API key to use our API - this is a unique key that identifies your requests. They're free for development, open-source, and non-commercial use. You can get one <Link to = "/signup"> get API key.</Link></h6>
        <br />  
        <img src={get}></img>
      </div>
    </SideNav>
  );
};

export default Errors;
