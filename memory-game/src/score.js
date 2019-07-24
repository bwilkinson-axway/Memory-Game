import React, {Component} from 'react';

class Score extends Component {
  constructor(props){
    super(props)
  this.state={
    score:0,
    time:0
  }
  this.startTimer = this.startTimer.bind(this)
}
  startTimer(){
    this.timer= setInterval(()=> this.setState({
      time: this.state.time +1
    }), 1000)

  }



  render(){
  return (
    <div className="score">
    <h1>Score: 10000</h1>
    <h1>Timer: {this.state.time} seconds</h1>
    <button>New Game</button>
    <button onClick={this.startTimer}>start</button>{console.log(this.state.time)}
    </div>
  );
}
}

export default Score;
