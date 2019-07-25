import React from 'react';
import Card from './card';

function Cards({props}) {
  let card = props.props
  return (
    <div className="cards">
   <div className='row'>{console.log(card[0].disabled)}
   <Card disabled={card[0].disabled} di={card[0].id} back={card[0].back} flipped={card[0].flipped} id={card[0].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[0].id} backgroundImage={card[0].picture}/>
   <Card disabled={card[1].disabled} di={card[1].id} back={card[1].back} flipped={card[1].flipped} id={card[1].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[1].id} backgroundImage={card[1].picture}/>
   <Card disabled={card[2].disabled} di={card[2].id} back={card[2].back} flipped={card[2].flipped} id={card[2].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[2].id} backgroundImage={card[2].picture}/>
   <Card disabled={card[3].disabled} di={card[3].id} back={card[3].back} flipped={card[3].flipped} id={card[3].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[3].id} backgroundImage={card[3].picture}/>
   </div>
   <div className='row'>
   <Card disabled={card[4].disabled} di={card[4].id} back={card[4].back} flipped={card[4].flipped} id={card[4].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[4].id} backgroundImage={card[4].picture}/>
   <Card disabled={card[5].disabled} di={card[5].id} back={card[5].back} flipped={card[5].flipped} id={card[5].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[5].id} backgroundImage={card[5].picture}/>
   <Card disabled={card[6].disabled} di={card[6].id} back={card[6].back} flipped={card[6].flipped} id={card[6].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[6].id} backgroundImage={card[6].picture}/>
   <Card disabled={card[7].disabled} di={card[7].id} back={card[7].back} flipped={card[7].flipped} id={card[7].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[7].id} backgroundImage={card[7].picture}/>
   </div>
   <div className='row'>
   <Card disabled={card[8].disabled} di={card[8].id} back={card[8].back} flipped={card[8].flipped} id={card[8].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[8].id} backgroundImage={card[8].picture}/>
   <Card disabled={card[9].disabled} di={card[9].id} back={card[9].back} flipped={card[9].flipped} id={card[9].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[9].id} backgroundImage={card[9].picture}/>
   <Card disabled={card[10].disabled} di={card[10].id} back={card[10].back} flipped={card[10].flipped} id={card[10].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[10].id} backgroundImage={card[10].picture}/>
   <Card disabled={card[11].disabled} di={card[11].id} back={card[11].back} flipped={card[11].flipped} id={card[11].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[11].id} backgroundImage={card[11].picture}/>
   </div>
   <div className='row'>
   <Card disabled={card[12].disabled} di={card[12].id} back={card[12].back} flipped={card[12].flipped} id={card[12].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[12].id} backgroundImage={card[12].picture}/>
   <Card disabled={card[13].disabled} di={card[13].id} back={card[13].back} flipped={card[13].flipped} id={card[13].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[13].id} backgroundImage={card[13].picture}/>
   <Card disabled={card[14].disabled} di={card[14].id} back={card[14].back} flipped={card[14].flipped} id={card[14].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[14].id} backgroundImage={card[14].picture}/>
   <Card disabled={card[15].disabled} di={card[15].id} back={card[15].back} flipped={card[15].flipped} id={card[15].itemId} handleClick={(itemId, id) => props.handleClick(itemId, id)} key={card[15].id} backgroundImage={card[15].picture}/>
   </div>
    </div>
  );
}

export default Cards;
