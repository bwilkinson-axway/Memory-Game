import React from 'react';

class Score extends React.Component {

  render() {

    return (
      <div className="score">
      <h1>Score: 10000</h1>
      <h1>Timer: 0 seconds</h1>
      <button>New Game</button>
      </div>
    );
  }
}

export default Score;
