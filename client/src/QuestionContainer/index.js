import React, { Component } from 'react'
import drawing from 'atrament'
import './style.css'

const styles = {
  question: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 580,
    display: 'flex',
    flexDirection: 'row',
    margin: 50,
    borderRadius: 40,
    border: 'none',
    borderWidth: 1,
    color: 'white'
  },
  input: {
    width: 480,
    borderRadius: 40,
    fontSize: '1em',
    borderStyle: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    resize: 'none',
    fontFamily: 'Gloria Hallelujah'
  },
  button: {
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }
}

const initState = {
  question: '',
  textAreaHeight: 40
}



class QuestionContainer extends Component {
  constructor(props) {
    super(props)
    this.state = initState
  }

  handleText = (e) => {
    this.setState({question: e.target.value})
    this.resetSize()
  }

  resetSize = () => {
    if (this.state.question.length < 48) {
      this.setState({textAreaHeight: 40})
    } else if (this.state.question.length > 50) {
        this.setState({textAreaHeight: 60})
    } else if (this.state.question.length > 100) {
        this.setState({textAreaHeight: 80})
    }
  }

  sendQuestion = () => {
    if (this.state.question.length > 1){

      const question = JSON.stringify({question:this.state.question})
      fetch('http://localhost:3000/questions', {
        method: 'POST',
        body: question,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })

    }
  }

  render() {
    return (
      <div className='questionContainer'>
        <div style={styles.question}>
          <textarea
            style={Object.assign({}, styles.input, {height: this.state.textAreaHeight})}
            className='input'
            maxLength={300}
            onChange={this.handleText}
            value={this.state.question}
            onKeyDown={this.checkKey}></textarea>
          <div
            style={styles.button}
            className='button'
            onClick={this.sendQuestion}
            >Send</div>
        </div>
        <canvas id="drawing" width="500px" height="500px" />
      </div>
    )
  }
}

export default QuestionContainer
