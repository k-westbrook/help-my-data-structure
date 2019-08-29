import React from 'react';
import { Link } from "react-router-dom";

import './App.css';

class Routes extends React.Component {


  render() {
    return (
      <div className='nav-bar-container'>
        <div>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </div>
        <div>
          <Link to="/binarysearchtree">
            <h3>Binary Search Tree</h3>
          </Link>
        </div>

      </div>
    )
  }
}

export default Routes;
