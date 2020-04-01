import React, { useEffect } from "react";

function Direction(props) {
  let direction = props.direction
  let getStopList = props.getStopList
  useEffect(() => {
    getStopList();
  },[direction])
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
        { props.directionList.length>0 ? ( 
        <div>
          {northSouth ? (
            <form style={{height: 208}}>
              <input style={{marginTop: 89}} onChange={props.handleInputChange} type="radio" id="north" name="direction" value="4" />
              <label for="direction">North</label><br />
              <input onChange={props.handleInputChange} type="radio" id="south" name="direction" value="1" />
              <label for="direction">South</label><br /><br /><br />
            </form>
          ):(
            <form style={{height: 208}}>
              <input style={{marginTop: 89}} onChange={props.handleInputChange} type="radio" id="east" name="direction" value="2" />
              <label for="direction">East</label><br />
              <input onChange={props.handleInputChange} type="radio" id="west" name="direction" value="3" />
              <label for="direction">West</label><br /><br /><br />
            </form>
          )}
        </div>
        ):(
          <div style={{height: 208}}>
            <p style={{marginTop: 89}}>Please choose a route</p>
            </div>
        )}
    </div>
  </div>)
}

export default Direction;
