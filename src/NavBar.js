import React from 'react';
import { Link } from "react-router-dom";

import './App.css';

class Routes extends React.Component {


  render() {
    return (
      <div className='nav-bar-container'>
        <div className='nav-bar-item' >
          <Link className='link' to="/">
            <h3>Home</h3>
          </Link>
        </div>
        <div className='nav-bar-item'>
          <Link className='link' to="/stack">
            <h3>Stack</h3>
          </Link>
        </div>
        <div className='nav-bar-item'>
          <Link className='link' to="/binarysearchtree">
            <h3>Binary Search Tree</h3>
          </Link>
        </div>


      </div>
    )
  }
}

export default Routes;
