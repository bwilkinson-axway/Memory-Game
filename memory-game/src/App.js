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

    ]
  }

   shuffleState = this.state.cards.sort(function(){
    console.log('a')
    return 0.5 - Math.random()
  })



  render(){
    //let shuffleState;
  return (
    <div className="App">
        {console.log(this.state.cards)}
        <Game props={this.state.cards} />
        <ScoreContainer />
    </div>
  );
}}

export default App;
