import React from 'react';
import Score from './score'

function ScoreContainer(props) {
  return (
    <div className="score-container">
    <img alt='logo' id='logo' src='http://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/476488/Match_Game_orange_logo_small.png' />
    <Score setDisabled={props.setDisabled} score={props.score} shuffle={props.shuffle} matchedPairs={props.matchedPairs} />
    </div>
  );
}

export default ScoreContainer;
