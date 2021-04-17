import React from "react";
import SideNav from "../../components/SideNav";
import { Link } from "react-router-dom";

const Endpoints = () => {
  return (
    <SideNav>
      <div className="container">
        <h2>Endpoints</h2>
        <br />
        <h4>9ja news api has 2 main endpoints:</h4>
        <ul>
          <li>/api/vanguard/apikey= YOUR API KEY/category</li>
          <li>/api/vanguard/apikey= YOUR API KEY/category</li>
        </ul>
        <hr />
        <h4>
          We also have a sub endpoint that can be used to retrieve News
          categories from either of the main news sources. for example:
        </h4>

        <ul>
          <li>
            vanguard/api/vanguard/news - returns the days recent news from
            vanguard nigeria.
          </li>
          <li>
            punch /api/punch/news - returns the days recent news from punch news
            paper.
          </li>
        </ul>
        <strong>
          and below is a list of categories that can be searched from:
        </strong>
        <hr />
        <h4>Categories</h4>
        <br />
        <ul>
          <li>politics</li>
          <li>business</li>
          <li>entertainment</li>
          <li>technology</li>
          <li>sports</li>
        </ul>

        <h6>
          The category is to be apended to the query parameter and would return
          a response about the category provided in the querying parameter
          (including title, description, and category, url, image,id) of each
          news returned in the response
        </h6>
        <hr></hr>
        <br />
        <h6>
          We also have a sub endpoint that can be used to retrieve certain
          search words or terms. Lets say we want to get the latest articles
          about president buhari. "president buhari" is the search term and
          should be apended to the end of query parameter for example
        </h6>
        <ul>
          <li>
          /api/search/apikey= YOUR API KEY/president buhari
          </li>
          <li>
          /api/search/apikey= YOUR API KEY/buhari
          </li>
         
        </ul>
        <h4>Corona Virus</h4>

       <ul>
          <li>
          /api/search/apikey= YOUR API KEY/corona virus
          </li>
          <li>
          /api/search/apikey= YOUR API KEY/covid19
          </li>
         
        </ul>

      </div>
    </SideNav>
  );
};

export default Endpoints;
