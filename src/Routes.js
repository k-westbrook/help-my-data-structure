import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import BinarySearchTree from './BinarySearchTree'
import './App.css';

class Routes extends React.Component {


  render() {
    return (
      <div>
        <Router>
          <Route path="/binarysearchtree" component={BinarySearchTree} />
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    )
  }
}

export default Routes;
