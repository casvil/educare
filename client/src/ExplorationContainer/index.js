import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const styles = {
  categories: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'Gloria Hallelujah'
  },
  category: {
    height: 150,
    width: 150,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
  }
}

class ExplorationContainer extends Component {

  render() {
    return (
      <div className='explorationContainer'>
        <div style={styles.categories} className='categoriesBox'>
          <NavLink to='/nature' className='navlink'>
            <div style={styles.category}
              className='nature'>Nature</div>
          </NavLink>
          <NavLink to='/science' className='navlink'>
            <div style={styles.category}
              className='science'>Science</div>
          </NavLink>
          <NavLink to='/humanities' className='navlink'>
            <div style={styles.category}
              className='humanities'>Humanities</div>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default ExplorationContainer
