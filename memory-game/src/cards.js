import React from 'react';
import Card from './card';

function Cards({props}) {
  let card = props.props

  return (
    <div className="cards">
   {console.log(props.props.length)}
   <div className='row'>
   <Card key={card[0].id} backgroundImage={card[0].picture}/>
   <Card key={card[1].id} backgroundImage={card[1].picture}/>
   <Card key={card[2].id} backgroundImage={card[2].picture}/>
   <Card key={card[3].id} backgroundImage={card[3].picture}/>
   </div>
   <div className='row'>
   <Card key={card[4].id} backgroundImage={card[4].picture}/>
   <Card key={card[5].id} backgroundImage={card[5].picture}/>
   <Card key={card[6].id} backgroundImage={card[6].picture}/>
   <Card key={card[7].id} backgroundImage={card[7].picture}/>
   </div>
   <div className='row'>
   <Card key={card[8].id} backgroundImage={card[8].picture}/>
   <Card key={card[9].id} backgroundImage={card[9].picture}/>
   <Card key={card[10].id} backgroundImage={card[10].picture}/>
   <Card key={card[11].id} backgroundImage={card[11].picture}/>
   </div>
   <div className='row'>
   <Card key={card[12].id} backgroundImage={card[12].picture}/>
   <Card key={card[13].id} backgroundImage={card[13].picture}/>
   <Card key={card[14].id} backgroundImage={card[14].picture}/>
   <Card key={card[15].id} backgroundImage={card[15].picture}/>
   </div>
    </div>
  );
}

export default Cards;
