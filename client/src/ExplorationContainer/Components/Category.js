import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Category extends Component {
  componentWillMount(){
    let cat
    if(this.props.match.params.category === 'nature') {
      cat = 1
    } else if (this.props.match.params.category === 'science') {
      cat = 2
    } else if (this.props.match.params.category === 'humanities') {
      cat = 3
    }
    fetch(`http://localhost:3000/questions/cat/${cat}`)
      .then(res => res.json())
      .then(questions => {
        console.log(questions);
      })

  }
  render() {
    return(
      <div>yayayay</div>
    )
  }
}

export default withRouter(Category)
