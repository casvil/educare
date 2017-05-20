import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Category extends Component {
  constructor(props){
    super(props)
    this.state = {questions: []}
  }
  componentDidMount(){

    fetch(`http://localhost:3000/questions/cat/${this.props.match.params.category}`)
      .then(res => res.json())
      .then(questions => {
        if (questions) {
          this.setState({questions: questions})
          console.log(questions);
        }
      })

  }
  render() {
    return(
      <div>
        {
          this.state.questions.map((question, i) => {
            return <div key={i}>{question.body}</div>
          })
        }
      </div>
    )
  }
}

export default withRouter(Category)
