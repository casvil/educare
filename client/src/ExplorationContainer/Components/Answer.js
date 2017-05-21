'use strict';

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Answer extends Component {
  constructor(props){
    super(props)
    this.state = {answers: []}
  }

  componentDidMount(){

  }

  render() {
    return(
      <div>
      {this.props.answer}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  showAnswers: (answers) => dispatch({ type: 'SHOW_ANSWERS', answers})
})

const mapStateToProps = (state) => ({

})


export default Answer
