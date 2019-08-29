import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import BinarySearchTree from './BinarySearchTree'
import './App.css';

class Routes extends React.Component {


  render() {
    return (
      <div className='route-container'>
        <Switch>
          <Route path="/binarysearchtree" component={BinarySearchTree} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
