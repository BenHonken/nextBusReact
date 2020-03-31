import React from "react";

function Direction(props) {
  let northSouth = false;
  if(props.directionList && props.directionList[0]){
      if (props.directionList[0].Value === "4"){
          northSouth = true
      }
  }
  return(
  <div>
    <div className="card text-center">
      <div className="card-header" style={{height: 110}}>
        <h2>Direction:</h2>
      </div>
      <div className="card-body"></div>
        { props.directionList.length>0 ? ( 
        <div>
          {northSouth ? (
            <form style={{height: 208}}>
              <input onChange={props.handleInputChange} onClick={props.getStopList} type="radio" id="north" name="direction" value="4" />
              <label for="direction">North</label><br />
              <input onChange={props.handleInputChange} type="radio" id="south" name="direction" value="1" />
              <label for="direction">South</label><br /><br /><br />
            </form>
          ):(
            <form style={{height: 208}}>
              <input onChange={props.handleInputChange} type="radio" id="east" name="direction" value="2" />
              <label for="direction">East</label><br />
              <input onChange={props.handleInputChange} type="radio" id="west" name="direction" value="3" />
              <label for="direction">West</label><br /><br /><br />
            </form>
          )}
        </div>
        ):(
          <div>Please choose a route</div>
        )}
    </div>
  </div>)
}

export default Direction;
