import React from 'react';
import Score from './score'

function ScoreContainer(props) {
  return (
    <div className="score-container">
    <h1>Score Container </h1>
    <Score score={props.score} shuffle={props.shuffle} matchedPairs={props.matchedPairs}/>
    </div>
  );
}

export default ScoreContainer;
