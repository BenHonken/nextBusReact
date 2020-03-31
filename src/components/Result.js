import React from "react";

function Result(props) {
  let departureText;
  if (props.departureList[0] && props.departureList[0].DepartureText === "Due"){
    departureText="Your departure is due now!  Next Departure: " + props.departureList[1].DepartureText;
  }
  else if (props.departureList[0]){
    departureText="Next Departure: " + props.departureList[0].DepartureText;
  }
  return (
    <div className="text-center">
      {props.departureList && props.departureList.length > 0 ? (
        <h2>{departureText}</h2>
      ) : (
          <h2>Please enter a route, direction, and stop!</h2>
        )}
    </div>
  );
}

export default Result;
