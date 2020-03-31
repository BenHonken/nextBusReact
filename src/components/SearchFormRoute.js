import React from "react";
import AutoSuggest from "./AutoSuggestRoutes";

function SearchFormRoute(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Search for a route!</h2>
      </div>
      <div className="card-body"></div>
      <form style={{height: 208}}>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="route">Search</label>
          <input
            onChange={props.handleInputChange}
            route={props.route}
            name="route"
            type="text"
            className="form-control"
            placeholder="Search routes"
            id="routeSearch"
          />
          <br />
        </div>
      </form>
    </div>

  );
}

export default SearchFormRoute;
