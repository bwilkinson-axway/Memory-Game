import React from 'react';
import Score from './score'

function ScoreContainer(props) {
  return (
    <div className="score-container">
    <img alt='logo' id='logo' src='bone.png' />
    <Score setDisabled={props.setDisabled} score={props.score} shuffle={props.shuffle} matchedPairs={props.matchedPairs} />
    </div>
  );
}

export default ScoreContainer;
