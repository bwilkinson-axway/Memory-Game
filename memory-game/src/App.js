import React, {Component} from 'react';
import './App2.css';
import Game from './game'
import ScoreContainer from './scorecontainer'
import uuid from 'uuid';

class App extends Component {
  state = {
    cards: [
      {
        id: uuid.v4(),
        picture: 'https://acdn.list25.com/wp-content/uploads/2015/06/Muscular.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:1,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://acdn.list25.com/wp-content/uploads/2015/06/Muscular.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:1,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548__340.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:2,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548__340.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:2,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://pixel.nymag.com/imgs/daily/vulture/2019/01/14/14-a-dogs-way-home.w700.h700.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:3,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://pixel.nymag.com/imgs/daily/vulture/2019/01/14/14-a-dogs-way-home.w700.h700.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:3,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://www.washingtonpost.com/resizer/1JDsJMhSX2AFUT7nRikkTL3jlyc=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KTYY2YRXUII6TA3V4POPNNUFLA.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:4,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://www.washingtonpost.com/resizer/1JDsJMhSX2AFUT7nRikkTL3jlyc=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KTYY2YRXUII6TA3V4POPNNUFLA.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:4,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://s3.amazonaws.com/filestore.rescuegroups.org/1776/pictures/animals/14509/14509423/66500165_500x500.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:5,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://s3.amazonaws.com/filestore.rescuegroups.org/1776/pictures/animals/14509/14509423/66500165_500x500.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:5,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://ichef.bbci.co.uk/news/304/cpsprodpb/FFDC/production/_99000556_20171129_155441.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:6,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://ichef.bbci.co.uk/news/304/cpsprodpb/FFDC/production/_99000556_20171129_155441.jpg',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:6,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://www.humanesociety.org/sites/default/files/styles/400x400/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=txM-HxF8',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:7,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://www.humanesociety.org/sites/default/files/styles/400x400/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=txM-HxF8',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:7,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/short-haired-dogs-boston-terrier-1563206936.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:8,
        flipped: false,
        disabled:true,
      },
      {
        id: uuid.v4(),
        picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/short-haired-dogs-boston-terrier-1563206936.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*',
        back: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/white-question-mark-ornament_2754.png',
        matched: false,
        itemId:8,
        flipped: false,
        disabled:true,
      }

    ],

    clicked: 0,
    score: 0,
    matchedPairs:0,
    disabled:true,
    clickedId:0
  }


   shuffleState = this.state.cards.sort(function(){
    console.log('a')
    return 0.5 - Math.random()
  })

  timeout = () => {
    this.setState({
      cards: this.state.cards.map(card => card.matched ? {...card, flipped: true} : {...card, flipped: false}),
      clicked: 0,
  })
  }

  handleClick = (itemId, id) => {
    console.log(itemId)
    console.log(this.state)
    if (this.state.clicked === 0) {
      this.setState({
        clicked: itemId,
        clickedId: id,
        cards: this.state.cards.map(card => card.id === id ? {...card, flipped: true} : {...card})
      })
    } else {
      if (itemId === this.state.clicked  && id !== this.state.clickedId) {
        this.setState({
          cards: this.state.cards.map(card => card.itemId === itemId ? {...card, flipped: true} : {...card})
        })
        this.setState({
          cards: this.state.cards.map(card => card.itemId === itemId ? {...card, flipped: true, matched: true, picture: 'https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-curved-check-mark-circle-icon-by-vexels.png'} : {...card}),
          clicked: 0,
          score: this.state.score + 1,
          matchedPairs: this.state.matchedPairs +1
        })
      } else {
        console.log('else')
        this.setState({
          cards: this.state.cards.map(card => card.id === id ? {...card, flipped: true} : {...card})
        })
        setTimeout(() => this.timeout(), 1000)
      }
    }
  }
setDisabled=()=>{
  this.setState({
    disabled: false
  });
}


  render(){
    //let shuffleState;
  return (
    <div className="App">
        {console.log(this.state.cards)}
        <Game handleClick={(itemId, id) => this.handleClick(itemId, id)} props={this.state.cards} disabled={this.state.disabled}/>
       <ScoreContainer setDisabled={this.setDisabled} score={this.state.score} shuffle={this.state.cards} matchedPairs={this.state.matchedPairs}/>
    </div>
  );
}}

export default App;
