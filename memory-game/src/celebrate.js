import React, { Component } from "react";
import './App2.css'

class Celebrate extends Component {


  render() {
    console.log(this.props);
    return (
      <div className="celebrate">
        <h1>🎊 🎉🍾🐕🐩🐶🐺🐾💰 YOU DID IT!!! 🎊 🎉🍾🐕🐩🐶🐺🐾💰</h1>
        <h2> Score: {this.props.score} </h2>
        <h2> Time: {this.props.time} </h2>
        <button onClick={() => window.location.reload()}>✖</button><br />
        <img alt='dog celebration' src='https://media.giphy.com/media/kBZBlLVlfECvOQAVno/giphy.gif' />
      </div>
    );
  }
}

export default Celebrate;
