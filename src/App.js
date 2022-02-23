import './App.css';
import ToxicAlphabet from './components/ToxicAlphabet';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {alphabets: [], alphabetArray: ['A', 'S', 'R']};
    this.multiplyAlphabets = this.multiplyAlphabets.bind(this);
    this.handleAlphabetClick = this.handleAlphabetClick.bind(this);
    this.getAlphabet = this.getAlphabet.bind(this);
    this.getRandomPercentAround = this.getRandomPercentAround.bind(this);
    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.addAlphabet = this.addAlphabet.bind(this);
  }

  componentDidMount() {
    this.addAlphabet(45, 45, 0, 1);
  }

  getRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum);
  }

  getAlphabet() {
    return this.state.alphabetArray[Math.floor(this.getRandomNumber(3))];
  }

  getRandomPercentAround(targetNum, delta) {
    let isPositive = this.getRandomNumber(2) % 2;

    if (isPositive == 1) {
      return '' + (targetNum + this.getRandomNumber(delta)) + '%';
    } else {
      return '' + (targetNum - this.getRandomNumber(delta)) + '%';
    }
  }

  multiplyAlphabets(parentTop, parentLeft) {
    this.addAlphabet(parentTop, parentLeft, 10, 2);
  }

  addAlphabet(parentTop, parentLeft, delta, count) {
    let currAlphabetArray = this.state.alphabets;

    for (let i = 0; i < count; i++) {
      currAlphabetArray = currAlphabetArray.concat(
        <div className='Alphabet-wrapper' style={{ top: this.getRandomPercentAround(parentTop, delta), left: this.getRandomPercentAround(parentLeft, delta) }}
         onClick={this.handleAlphabetClick}>
          <ToxicAlphabet alphabet={this.getAlphabet()}/>
        </div>)
    }

    this.setState({ alphabets: currAlphabetArray });
  }

  handleAlphabetClick(event) {
    let currentAlphabet = event.currentTarget;
    currentAlphabet.style.display = 'none';
    this.multiplyAlphabets(parseInt(currentAlphabet.style.top.substring(0, currentAlphabet.style.top.length - 1)), 
      parseInt(currentAlphabet.style.left.substring(0, currentAlphabet.style.left.length - 1)));
  }

  render() {
    return (
      <div className="App">
        {React.Children.toArray(this.state.alphabets)}
      </div>
    );
  }
}

export default App;
