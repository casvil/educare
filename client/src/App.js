import React, { Component } from 'react';
import Header from './Header'
import QuestionContainer from './QuestionContainer'
import ExplorationContainer from './ExplorationContainer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import './App.css'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
      <Provider store={store}>
        <div className="App">
          <Header />
          <div style={styles.container}>
            <QuestionContainer />
            <ExplorationContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
