'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 20,
    margin: 30,
    fontFamily: 'Gloria Hallelujah',
    borderRadius: 20,
    cursor: 'pointer',
  }
}

class Question extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.question}
      </div>
    )
  }
}

export default Question
