import React from 'react';
import Card from './card';

function Cards({props}) {
 
  return (
    <div className="cards">
   {console.log(props.props.length)}
   {props.props.map((card)=>
    <Card key={card.id} backgroundImage={card.picture}/>)}
    
    
    </div>
  );
}

export default Cards;
