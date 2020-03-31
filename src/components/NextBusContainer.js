import React, { Component, useEffect } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import RouteSearchSuggest from "./RouteSearchSuggest";
import StopSearchSuggest from "./StopSearchSuggest";
import Direction from "./Direction";
import Result from "./Result";
const axios = require("axios");

class NextBusContainer extends Component {
  state = {
    departureList: [],
    departure: "",
    routeList: [],
    route: "",
    routeNumber: "",
    stopList: [],
    stop: "",
    stopValue: "",
    directionList: [],
    direction: 0,
  };
  
  componentDidMount() {
    this.getRoutes();
  }
  getRoutes = async () => {
    let response = await axios.get('https://svc.metrotransit.org/NexTrip/Routes?format=json')
    this.setState({ 'routeList': response.data });
  }
  getRouteNumber = async () => {
    //event.preventDefault();
    let goodRoute = false
    for (let i=0; i<this.state.routeList.length; i++){
      if (this.state.routeList[i].Description.includes(this.state.route) && !goodRoute){
          this.setState({ 'routeNumber': this.state.routeList[i].Route});
          goodRoute = true;
      }
    }
    this.clearDirection();
    this.clearStop();
    await this.getDirectionList()
  }
  getRouteNumberClick = async (event) => {
    event.preventDefault();
    let goodRoute = false
    for (let i=0; i<this.state.routeList.length; i++){
      if (this.state.routeList[i].Description.includes(this.state.route) && !goodRoute){
          this.setState({ 'routeNumber': this.state.routeList[i].Route});
          goodRoute = true;
      }
    }
    this.clearDirection();
    this.clearStop();
    await this.getDirectionList()
  }
  getDirectionList = async () => {
    let response = await axios.get('https://svc.metrotransit.org/NexTrip/Directions/' + this.state.routeNumber + '?format=json')
    this.setState({ 'directionList': response.data });
  }
  clearDirection() {
    this.setState({ 'direction': 0 });
    this.setState({ 'directionList': [] });
  }
  getStopList = async () => {
    let response = await axios.get('https://svc.metrotransit.org/NexTrip/Stops/' + this.state.routeNumber + '/' + this.state.direction + '?format=json')
    this.clearStop();
    this.setState({ 'stopList': response.data });
  }
  getStopValue = async () => {
    let goodStop = false
    for (let i=0; i<this.state.stopList.length; i++){
      if (this.state.stopList[i].Text === this.state.stop){
        this.setState({ 'stopValue': this.state.stopList[i].Value});
        goodStop = true;
      }
    }
    await this.getDepartureList();
  }
  getStopValueClick = async (event) => {
    event.preventDefault();
    let goodStop = false
    for (let i=0; i<this.state.stopList.length; i++){
      if (this.state.stopList[i].Text === this.state.stop){
        this.setState({ 'stopValue': this.state.stopList[i].Value});
        goodStop = true;
      }
    }
    await this.getDepartureList();
  }
  clearStop() {
    this.setState({ 'stop': "" });
    this.setState({ 'stopList': [] });
  }
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  getDepartureList = async () => {
    let response = await axios.get('https://svc.metrotransit.org/NexTrip/' + this.state.routeNumber + '/' + this.state.direction + '/' + this.state.stopValue + '?format=json')
    this.setState({ 'departureList': response.data });
    console.log('https://svc.metrotransit.org/NexTrip/' + this.state.routeNumber + '/' + this.state.direction + '/' + this.state.stopValue + '?format=json');
  }
  handleClickRoute = (event) => {
    event.preventDefault();
    this.setState({ 'route': event.currentTarget.dataset.value });
  }
  handleClickStop = (event) => {
    event.preventDefault();
    this.setState({ 'stop': event.currentTarget.dataset.value });
  }
  render() {
    let route=this.state.route;
    let direction=this.state.direction
    let stop=this.state.stop
    let stopValue=this.state.stopValue
    let departureList=this.state.departureList
    // useEffect(() => {
    //   this.getRouteNumber();
    // },[route])
    // useEffect(() => {
    //   this.clearDirection();
    // },[route])
    // useEffect(() => {
    //   this.getDirectionList();
    // },[route])
    // useEffect(() => {
    //   this.clearStop();
    // },[route])
    // useEffect(() => {
    //   this.getStopList();
    // },[direction])
    // useEffect(() => {
    //   this.getStopValue();
    // },[stop])
    // useEffect(() => {
    //   this.getDepartureList();
    // },[stopValue])
    // useEffect(() => {
    //   this.handleFormSubmit();
    // },[departureList])
    return (
      <Container>
        <Row>
        <Col size="md-4">
            <RouteSearchSuggest
              routeList={this.state.routeList}
              route={this.state.route}
              routeNumber={this.state.routeNumber}
              direction={this.state.direction}
              directionList={this.state.directionList}
              handleInputChange={this.handleInputChange}
              handleClickRoute={this.handleClickRoute}
              getRouteNumber={this.getRouteNumber}
              getRouteNumberClick={this.getRouteNumberClick}
              clearDirection={this.clearDirection}
              getDirectionList={this.getDirectionList}
              clearStop={this.clearStop}
            />
          </Col>
          <Col size="md-4">
            <Direction
              direction={this.state.direction}
              directionList={this.state.directionList}
              handleInputChange={this.handleInputChange}
              getStopList={this.getStopList}
            />
          </Col>
          <Col size="md-4">
          <StopSearchSuggest
              stopList={this.state.stopList}
              stop={this.state.stop}
              stopValue={this.state.stopValue}
              departureList={this.state.departureList}
              handleInputChange={this.handleInputChange}
              handleClickStop={this.handleClickStop}
              getStopValue={this.getStopValue}
              getStopValueClick={this.getStopValueClick}
              getDepartureList={this.getDepartureList}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <Result departureList={this.state.departureList}/>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default NextBusContainer;
