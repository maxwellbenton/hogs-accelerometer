import React, { Component, PropTypes } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    alpha: null,
    beta: null,
    gamma: null,
    pointA: null,
    pointB: null,
    pointG: null,
    compass: null,
    latitude: null,
    longitude: null,
    loading: null,
    locations: {
      "Central Park": [40.7829, 73.9654],
      "Bull Statue": [40.705576, -74.013421],
      "World Trade Center": [40.7127, 74.0134]
    }
  };

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        "deviceorientation",
        this.deviceOrientationListener
      );
      this.setState({
        pointA: Math.round(Math.random() * 360),
        pointB: Math.round(Math.random() * 360) - 180,
        pointG: Math.round(Math.random() * 180) - 90
      });
      if (navigator.geolocation) {
        this.setState({ loading: true });
        navigator.geolocation.getCurrentPosition(position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            loading: false
          });
        });
      } else {
        console.log("geolocation error");
      }
    } else {
      alert("Sorry, your browser doesn't support Device Orientation");
    }
  }

  deviceOrientationListener = event => {
    this.setState({
      alpha: Math.round(event.alpha),
      beta: Math.round(event.beta),
      gamma: Math.round(event.gamma),
      compass: Math.round(event.webkitCompassHeading)
    });
  };

  render() {
    const locations = Object.keys(this.state.locations).map(key => (
      <li>{key}</li>
    ));
    return (
      <div className="App">
        <div style={{ width: "100%" }}>
          <span
            style={{
              position: "relative",
              width: "33%",
              height: "10px",
              top: this.state.pointA - this.state.alpha
            }}
          >
            A
          </span>
          <span
            style={{
              position: "relative",
              width: "33%",
              height: "10px",
              top: 180 - this.state.pointB - this.state.beta
            }}
          >
            B
          </span>
          <span
            style={{
              position: "relative",
              width: "33%",
              height: "10px",
              top: 180 - this.state.pointG - this.state.gamma
            }}
          >
            G
          </span>
        </div>
      </div>
    );
  }
}

export default App;

// <h1>Compass: {this.state.compass}</h1>
// {this.state.loading ? (
//   <h1>loading...</h1>
// ) : (
//   <div>
//     <h1>Lat: {this.state.latitude}</h1>
//     <h1>{this.state.longitude}</h1>
//     {locations}
//   </div>
// )}
