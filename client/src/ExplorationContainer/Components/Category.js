import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { changeCategory } from '../../store/actions'

class Category extends Component {
  constructor(props){
    super(props)
    this.state = {questions: []}
  }
  componentDidMount(){
    this.props.changeCategory(this.props.match.params.category)
    fetch(`http://localhost:3000/questions/cat/${this.props.match.params.category}`)
      .then(res => res.json())
      .then(questions => {
        if (questions) {
          this.setState({questions: questions})
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

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category))
})

const mapStateToProps = (state) => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))
