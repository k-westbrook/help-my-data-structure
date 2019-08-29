import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import './App.css';

class Routes extends React.Component {


  render() {
    return (
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/binarysearchtree">
          <h3>Binary Search Tree</h3>
        </Link>

      </div>
    )
  }
}

export default Routes;
