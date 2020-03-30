import React from "react";

function SearchForm(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Search for a stop!</h2>
      </div>
      <div className="card-body"></div>
      <form style={{height: 208}}>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="stop">Search</label>
          <input
            onChange={props.handleInputChange}
            stop={props.stop}
            name="stop"
            type="text"
            className="form-control"
            placeholder="Search stops"
            id="stopSearch"
          />
          <br />
        </div>
      </form>
    </div>

  );
}

export default SearchForm;
