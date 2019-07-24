import React from 'react';
import Card from './card';

function Cards({props}) {
  let card = props.props
  return (
    <div className="cards">
   <div className='row'>
   <Card id={card[0].itemId} handleClick={(id) => props.handleClick(id)} key={card[0].id} backgroundImage={card[0].picture}/>
   <Card id={card[1].itemId} handleClick={(id) => props.handleClick(id)} key={card[1].id} backgroundImage={card[1].picture}/>
   <Card id={card[2].itemId} handleClick={(id) => props.handleClick(id)} key={card[2].id} backgroundImage={card[2].picture}/>
   <Card id={card[3].itemId} handleClick={(id) => props.handleClick(id)} key={card[3].id} backgroundImage={card[3].picture}/>
   </div>
   <div className='row'>
   <Card id={card[4].itemId} handleClick={(id) => props.handleClick(id)} key={card[4].id} backgroundImage={card[4].picture}/>
   <Card id={card[5].itemId} handleClick={(id) => props.handleClick(id)} key={card[5].id} backgroundImage={card[5].picture}/>
   <Card id={card[6].itemId} handleClick={(id) => props.handleClick(id)} key={card[6].id} backgroundImage={card[6].picture}/>
   <Card id={card[7].itemId} handleClick={(id) => props.handleClick(id)} key={card[7].id} backgroundImage={card[7].picture}/>
   </div>
   <div className='row'>
   <Card id={card[8].itemId} handleClick={(id) => props.handleClick(id)} key={card[8].id} backgroundImage={card[8].picture}/>
   <Card id={card[9].itemId} handleClick={(id) => props.handleClick(id)} key={card[9].id} backgroundImage={card[9].picture}/>
   <Card id={card[10].itemId} handleClick={(id) => props.handleClick(id)} key={card[10].id} backgroundImage={card[10].picture}/>
   <Card id={card[11].itemId} handleClick={(id) => props.handleClick(id)} key={card[11].id} backgroundImage={card[11].picture}/>
   </div>
   <div className='row'>
   <Card id={card[12].itemId} handleClick={(id) => props.handleClick(id)} key={card[12].id} backgroundImage={card[12].picture}/>
   <Card id={card[13].itemId} handleClick={(id) => props.handleClick(id)} key={card[13].id} backgroundImage={card[13].picture}/>
   <Card id={card[14].itemId} handleClick={(id) => props.handleClick(id)} key={card[14].id} backgroundImage={card[14].picture}/>
   <Card id={card[15].itemId} handleClick={(id) => props.handleClick(id)} key={card[15].id} backgroundImage={card[15].picture}/>
   </div>
    </div>
  );
}

export default Cards;
