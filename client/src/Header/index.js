import React, { Component } from 'react'
import './style.css'

const styles = {
  logo: {
    height: '100%',
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  user: {
    height: '100%',
    width: 150,
    backgroundColor: 'orange',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

class Header extends Component {
  render() {
    return(
      <div className='header'>
        <div style={styles.logo}>educare</div>
        <div style={styles.user}>Maria</div>
      </div>
    )
  }
}

export default Header