import React, { Component } from "react";

import Game from './Game'

class App extends Component {
  state = {
    screenSize: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    rotation: {
      alpha: 0,
      beta: 0,
      gamma: 0
    },
    north: {
      alpha: 0,
      beta: 0,
      gamma: 0
    },
    score: 0,
    timer: 60,
    point: {a: 0, b: 0, g: 0},
    loading: null,
    gameStarted: false
  };

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        "deviceorientation",
        this.deviceOrientationListener
      );
      this.onStart()
    } else {
      alert("Sorry, your browser doesn't support Device Orientation");
    }
  }

  onStart = () => {
    this.setState({
      gameStarted: true,
      point: {a: Math.round(Math.random() * 360),
              b: Math.round(Math.random() * 360) - 180,
              g: Math.round(Math.random() * 180) - 90}})
  }

  onSuccess = () => {
    this.setState((pState) => {
      return {
        score: pState + 1,
        point: {a: Math.round(Math.random() * 180)+180,
                b: Math.round(Math.random() * 360) - 180,
                g: Math.round(Math.random() * 180) - 90}
      }
    });
  }

  deviceOrientationListener = event => {
    this.setState({
      rotation: {
      alpha: Math.round(event.alpha),
      beta: Math.round(event.beta),
      gamma: Math.round(event.gamma)
      }
    });
  };

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <div style={{position: 'absolute'}}>
          <span>Score: {this.state.score}</span>
          <span>A: {this.state.rotation.alpha }</span>
          <span>B: {this.state.rotation.beta }</span>
          <span>G: {this.state.rotation.gamma }</span>

        </div>
        <Game {...this.state}/>
        <button> Start </button>
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
{/* <div className="App">
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
      </div> */}