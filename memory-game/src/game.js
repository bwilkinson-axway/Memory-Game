import React from 'react';
import Cards from './cards';

function Game(props) {
  return (
    <div className="game">
      <Cards handleClick={(itemId, id) => props.handleClick(itemId, id)} props={props} />
    </div>
  );
}

export default Game;
