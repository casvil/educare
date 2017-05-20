import React, { Component } from 'react';
import Header from './Header'
import QuestionContainer from './QuestionContainer'
import ExplorationContainer from './ExplorationContainer'
import Category from './ExplorationContainer/Components/Category'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import reducer from './store/reducer'
import './App.css'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const styles = {
  container: {
    width: '100%',
    height: 800,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}

class App extends Component {
  state = {
    background: {
      backgroundColor: 'rgb(239, 16, 62)'
    }
  }

  changeColor = (page) => {
    if (page === 'main') {
      this.setState({background: {
        backgroundColor: 'rgb(239, 16, 62)'
      }
    })
    }
    else if (page === 'science') {
      this.setState({background: {
        backgroundColor: 'rgb(0, 16, 62)'
      }
    })
    }

  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={this.state.background} className="App">
            <Header />
            <div style={styles.container}>
              <QuestionContainer />
              <Route exact path='/' component={ExplorationContainer} />
              <Route path='/:category' component={Category} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
