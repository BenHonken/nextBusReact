import React, { Component, useEffect } from "react";

function RouteSearchSuggest(props) {
  let route = props.route
  let routeNumber = props.routeNumber
  let getRouteNumber=props.getRouteNumber;
  let getDirectionList=props.getDirectionList;
  useEffect(() => {
    getRouteNumber();
  },[route])
  useEffect(() => {
    getDirectionList();
  },[routeNumber])
  const results = props.routeList.filter(route =>
    route.Description.toLowerCase().includes(props.route.toLowerCase()));
  return (
    <div>
    <div className="card text-center">
      <div className="card-header" style={{height: 110}}>
        <h2>Route:</h2>
      </div>
    <li className="nav-item add-tab" style={{height: 208}}>
      <button className="add-button" type="button" data-target="#routeModal" data-toggle="modal" style={{marginTop: 89}}>
        Search for a route
          </button>

      <div aria-hidden="true" aria-labelledby="routeModalLabel" className="modal" id="routeModal" role="dialog" tabindex="-1">

        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "darkslategray" }}>
              <h5 style={{ color: 'white' }} className="modal-title" id="routeModalHeader">Search for a Route:</h5>
              <button style={{ color: 'white' }} aria-label="Close" className="close" data-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="routeSearch">
              <div className="modal-body">
                <div className="form-group" style={{ textAlign: "left", fontSize: "20px" }}>
                  <input
                    className="form-control"
                    id="route-search"
                    onChange={props.handleInputChange}
                    value={props.route}
                    name="route"
                    type="text"
                    placeholder="Route"
                  />
                </div>
                <div className="form-group" style={{ textAlign: "center", fontSize: "20px", color: "darkslategray" }}>
                  <h4><u>Results</u></h4>
                </div>
                <div className="form-group" style={{ textAlign: "center", fontSize: "20px", color: "darkslategray" }}>
                  {results.length > 0 ? (
                    <ul className="list-group student-selection-ul">

                      {results.map(result => (
                        <li className="list-group-item student-selection-li" key={result.Route} data-value={result.Description} onClick={props.handleClickRoute}>
                          <div className="row">
                            <div className="col-md-12"><b>{result.Description}</b></div>
                          </div>
                        </li>
                      ))}
                    </ul >
                  ) : (
                      <h4>No Routes Found</h4>
                    )}
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </li>
    </div>
    </div>
  );

}


export default RouteSearchSuggest;