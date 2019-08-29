import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import BinarySearchTree from './Components/BinarySearchTree'
import './App.css';
import Stack from './Components/StackComponents/Stack';
import Queue from './Components/QueueComponents/Queue';
import SinglyLinkedList from './Components/SinglyLinkedList';

class Routes extends React.Component {


  render() {
    return (
      <div className='route-container'>
        <Switch>
          <Route path="/binarysearchtree" component={BinarySearchTree} />
          <Route path="/stack" component={Stack} />
          <Route path="/queue" component={Queue} />
          <Route path="/singlylinkedlist" component={SinglyLinkedList} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
