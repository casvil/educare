import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const styles = {
  logo: {
    height: '100%',
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2em',
    fontFamily: 'Gloria Hallelujah'
  },
  user: {
    height: '100%',
    width: 150,
    backgroundColor: 'orange',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '21px'
  },
  avatar: {
    width: 40,
    borderRadius: 20,
    marginRight: '21px'
  }
}

class Header extends Component {
  render() {
    return(
      <div className='header'>
        <NavLink className='logo' to='/'><div style={styles.logo}>educare</div></NavLink>
        <div style={styles.user}>
          <img
          style={styles.avatar}
          src={'https://d1ks23re3qw2nd.cloudfront.net/media/catalog/product/cache/1/image/385x385/9df78eab33525d08d6e5fb8d27136e95/H/V/HVC50010_0001_10.jpg'} />
          Maria
        </div>
      </div>
    )
  }
}

export default Header
