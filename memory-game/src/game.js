import React from 'react';
import Cards from './cards';

function Game(props) {
  return (
    <div className="game">
      <h1>Game Container</h1>
      <Cards props={props} />
    </div>
  );
}

export default Game;
