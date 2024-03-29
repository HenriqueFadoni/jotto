import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './components/Input/input';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import { getSecretWord } from './store/actions';

export class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state; 
  return { success, guessedWords, secretWord }; 
}

export default connect(mapStateToProps, { getSecretWord })(App);
