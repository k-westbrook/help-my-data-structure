import React from 'react';
import '../../App.css';
import { BST } from '../../DataStructures/BSTDS'
import PushForm from './PushForm';
import BinarySearchTreeDisplay from './BinarySearchTreeDisplay';

class BinarySearchTree extends React.Component {

  constructor() {
    super();
    this.state = {
      treeStructure: null,
      valuesArray: []
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    let newBDTDS = new BST();
    this.setState({ tree: newBDTDS })

  }

  handleAdd(evt) {

    evt.preventDefault();
    let nodeToBeAdded = parseInt(evt.target.addedNode.value);
    this.state.tree.addNode(nodeToBeAdded);
    this.setState({ valuesArray: this.state.tree.BFS() })

  }

  render() {
    console.log(this.state.valuesArray)
    return (
      <div className='stack-container'>
        <div>
          <h3 className='ds-header'>Binary Search Tree</h3>
          <div className='ds-explanation'>
            <p><b>What is a binary search tree?</b> to be completed</p>
          </div>
        </div>
        {
          (!this.state.tree) ?
            <div>
              <h3>Loading..</h3>
            </div>
            :
            <div>

              <div>
                <PushForm handleAdd={this.handleAdd} />
              </div>
              <div>
                <h5 className='stack-header'>The Tree</h5>
                <BinarySearchTreeDisplay tree={this.state.tree} valuesArray={this.state.valuesArray} />
              </div>

            </div>
        }
        <div>

        </div>

      </div >
    )
  }
}

export default BinarySearchTree;
