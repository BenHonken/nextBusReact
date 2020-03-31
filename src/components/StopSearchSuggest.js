import React, { Component, useEffect } from "react";

function StopSearchSuggest(props) {


  const results = props.stopList.filter(stop =>
    stop.Text.toLowerCase().includes(props.stop.toLowerCase()));
  return (
    <li className="nav-item add-tab">
      <button className="add-button" type="button" data-target="#stopModal" data-toggle="modal">
        Search for a stop
          </button>

      <div aria-hidden="true" aria-labelledby="stopModalLabel" className="modal" id="stopModal" role="dialog" tabindex="-1">

        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "darkslategray" }}>
              <h5 style={{ color: 'white' }} className="modal-title" id="stopModalHeader">Search for a Stop:</h5>
              <button style={{ color: 'white' }} aria-label="Close" className="close" data-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="stopSearch">
              <div className="modal-body">
                <div className="form-group" style={{ textAlign: "left", fontSize: "20px" }}>
                  <input
                    className="form-control"
                    id="stop-search"
                    onChange={props.handleInputChange}
                    value={props.stop}
                    name="stop"
                    type="text"
                    placeholder="Stop"
                  />
                </div>
                <div className="form-group" style={{ textAlign: "center", fontSize: "20px", color: "darkslategray" }}>
                  <h4><u>Results</u></h4>
                </div>
                <div className="form-group" style={{ textAlign: "center", fontSize: "20px", color: "darkslategray" }}>
                  {results.length > 0 ? (
                    <ul className="list-group student-selection-ul">

                      {results.map(result => (
                        <li className="list-group-item student-selection-li" key={result.Value} data-value={result.Text} onClick={props.handleClickStop}>
                          <div className="row">
                            <div className="col-md-12"><b>{result.Text}</b></div>
                          </div>
                        </li>
                      ))}
                    </ul >
                  ) : (
                      <h4>No Stops Found</h4>
                    )}
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                <button style={{ color: 'white', backgroundColor: "darkslategray", border: '.5 px solid white' }} className="btn" type="submit" onClick={props.getStopValue}>Choose this stop</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </li>
  );

}


export default StopSearchSuggest;