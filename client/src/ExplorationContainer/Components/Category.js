'use strict';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Question from './Question';

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
      });
  }
  render() {
    return(
      <div>
          {
            this.state.questions.map((question, i) => {
              return <Question key={i} questionId={question.id} question={question.body} />
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
