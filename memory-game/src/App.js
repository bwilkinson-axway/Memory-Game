import React, {Component} from 'react';
import logo from './logo.svg';
import './App2.css';
import Game from './game'
import ScoreContainer from './scorecontainer'
import uuid from 'uuid';
import { throws } from 'assert';

class App extends Component {
  state = {
    cards: [
      {
        id: uuid.v4(),
        picture: 'https://acdn.list25.com/wp-content/uploads/2015/06/Muscular.jpg',
        matched: false,
        itemId:1
      },
      {
        id: uuid.v4(),
        picture: 'https://acdn.list25.com/wp-content/uploads/2015/06/Muscular.jpg',
        matched: false,
        itemId:1
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:2
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:2
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:3
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:3
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:4
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:4
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:5
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:5
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:6
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:6
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:7
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:7
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:8
      },
      {
        id: uuid.v4(),
        picture: 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg',
        matched: false,
        itemId:8
      }

    ],

    clicked: 0,
  }

   shuffleState = this.state.cards.sort(function(){
    console.log('a')
    return 0.5 - Math.random()
  })

  handleClick = (id) => {
    console.log(id)
    console.log(this.state)
    if (this.state.clicked === 0) {
      this.setState({
        clicked: id
      })
    } else {
      if (id === this.state.clicked) {
        this.setState({
          cards: this.state.cards.map(card => card.itemId === id ? {...card, matched: true, picture: 'https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-curved-check-mark-circle-icon-by-vexels.png'} : {...card}),
          clicked: 0
        })

      }
    }
  }

  render(){
    //let shuffleState;
  return (
    <div className="App">
        {console.log(this.state.cards)}
        <Game handleClick={(id) => this.handleClick(id)} props={this.state.cards}/>
        <ScoreContainer shuffle={this.state.cards}/>
    </div>
  );
}}

export default App;
