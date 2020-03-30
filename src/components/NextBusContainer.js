import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchFormRoute from "./SearchFormRoute";
import SearchFormStop from "./SearchFormStop";
import Direction from "./Direction";
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
    this.getRoutes;
  }
  getRoutes() {
    let response = await axios.get('https://svc.metrotransit.org/NexTrip/Routes?format=json')
    this.setState({ 'routeList': response.data });
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  getDeparture() {
    let response = await axios.get('https://svc.metrotransit.org/NexTrip/' + this.state.routeNumber + '/' + this.state.direction + '/' + this.state.stopValue + '?format=json')
    this.setState({ 'departureList': response.data });
  }
  handleFormSubmit = event => {
    event.preventDefault();
    this.getDeparture();
  };
  render() {
    return (
      <Container>
        <Row>
        <Col size="md-4">
            <SearchFormRoute
              routeList={this.state.routeList}
              route={this.state.route}
              routeNumber={this.state.routeNumber}
              handleInputChange={this.handleInputChange}
            />
          </Col>
          <Col size="md-4">
            <Direction
              direction={this.state.direction}
              directionList={this.state.directionList}
              handleInputChange={this.handleInputChange}
            />
          </Col>
          <Col size="md-4">
            <SearchFormStop
              stopList={this.state.stopList}
              stop={this.state.stop}
              stopValue={this.state.stopValue}
              handleInputChange={this.handleInputChange}
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
