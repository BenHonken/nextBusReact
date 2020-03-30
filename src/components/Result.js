import React from "react";
import EmployeeList from "../data/employees.json";

function EmployeeInfo(props) {
  console.log(props)

  const results = EmployeeList.filter(employee => employee.name.first.toLowerCase().includes(props.search.toLowerCase()) || employee.name.last.toLowerCase().includes(props.search.toLowerCase()) || employee.email.toLowerCase().includes(props.search.toLowerCase()) || employee.location.city.toLowerCase().includes(props.search.toLowerCase()) || employee.location.state.toLowerCase().includes(props.search.toLowerCase()));
  const sort = function(props, results){
    results.sort(function(a, b){
      try{
        if(props.sortKey === "name.first"){
          var x = a.name.first.toLowerCase();
          var y = b.name.first.toLowerCase();
        }
        else if(props.sortKey === "name.last") {
          var x = a.name.last.toLowerCase();
          var y = b.name.last.toLowerCase();
        }
        else if(props.sortKey === "email") {
          var x = a.email.toLowerCase();
          var y = b.email.toLowerCase();
        }
        else if(props.sortKey === "location.city") {
          var x = a.location.city.toLowerCase();
          var y = b.location.city.toLowerCase();
        }
        else if(props.sortKey === "location.state") {
          var x = a.location.state.toLowerCase();
          var y = b.location.state.toLowerCase();
        }
        if(props.sortType === 1){
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        }
        else{
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        };
      }
      catch{}      
    });
  }
  sort(props, results);
  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Employees</h2>
          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3">Picture</div>
              <div className="col-md-3">Name</div>
              <div className="col-md-3">Email</div>
              <div className="col-md-3">Location</div>
            </div>
          </li>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <div className="row">
                <div className="col-md-3"><img src={result.picture.large} alt={result.name.first + " " + result.name.last + " picture"} /></div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-4">{result.name.first}</div>
                    <div className="col-md-4">{result.email}</div>
                    <div className="col-md-4">{result.location.city},</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">{result.name.last}</div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">{result.location.state}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">{result.location.country}</div>
                  </div>
                  
                </div>
              </div>
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default EmployeeInfo;
