import React from 'react';
import BST from './DataStructures/BST.js'
import './App.css';

class BinarySearchTree extends React.Component {

  constructor() {
    super();
    this.state = {
      BSTArray: []
    }
  }
  render() {
    let test = new BST();
    test.addNode(1);
    test.addNode(2);
    console.log(test.root, test.root.right);
    return (
      <div className='binary-search-container'>
        <div>
          <p>binary search tree</p>
        </div>
        <div>

        </div>

      </div>
    )
  }
}

export default BinarySearchTree;
