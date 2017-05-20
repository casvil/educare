import React, { Component } from 'react';
import Header from './Header'
import QuestionContainer from './QuestionContainer'
import ExplorationContainer from './ExplorationContainer'
import './App.css'

const styles = {
  container: {
    width: '100%',
    heigh: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={styles.container}>
          <QuestionContainer />
          <ExplorationContainer />
        </div>
      </div>
    );
  }
}

export default App;
