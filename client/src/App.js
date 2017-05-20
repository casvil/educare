import React, { Component } from 'react';
import Header from './Header'
import QuestionContainer from './QuestionContainer'
import ExplorationContainer from './ExplorationContainer'
import Category from './ExplorationContainer/Components/Category'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import './App.css'


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

  componentWillReceiveProps(nextprops) {
    if (nextprops.category === 'main') {
      this.setState({background: {
        backgroundColor: 'rgb(239, 16, 62)'
      }
    })
    }
    else if (nextprops.category === 'science') {
      this.setState({background: {
        backgroundColor: 'rgba(74, 144, 226, 0.8)'
      }
    })
  }
    else if (nextprops.category === 'nature') {
      this.setState({background: {
        backgroundColor: 'rgba(73, 164, 63, 0.8)'
      }
    })
  }
    else if (nextprops.category === 'humanities') {
      this.setState({background: {
        backgroundColor: 'rgba(248, 231, 28, 0.8)'
      }
    })
    }
  }

  changeColor = (page) => {


  }
  render() {
    return (

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
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category
})

export default connect(mapStateToProps)(App);
