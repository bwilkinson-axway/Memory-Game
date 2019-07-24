import React, { Component } from "react";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      time: 0
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
   this.props.setDisabled()
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1
        }),
      1000
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="score">
        <h1>Score: {this.props.score * 50}</h1>
        <h1>Timer: {this.state.time} seconds</h1>
        {this.props.matchedPairs === 8 ? clearInterval(this.timer) : null}
        <button onClick={this.startTimer}>New Game</button>
      </div>
    );
  }
}

export default Score;
