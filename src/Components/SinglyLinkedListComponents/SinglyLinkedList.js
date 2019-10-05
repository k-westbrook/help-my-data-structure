import React from 'react';
import '../../App.css';
import { SinglyLinkedListDS } from '../../DataStructures/SinglyLinkedListDS'
import PushForm from './PushForm';
import SinglyLinkedListDisplay from './SinglyLinkedListDisplay';

class SinglyLinkedList extends React.Component {

  constructor() {
    super();
    this.state = {
      linkedList: null,
      arrayValues: null
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddFirst = this.handleAddFirst.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRemoveFirst = this.handleRemoveFirst.bind(this);
    this.handleInsertAt = this.handleInsertAt.bind(this);
  }

  componentDidMount() {
    let newSinglyLinkedListDS = new SinglyLinkedListDS();

    this.setState({
      linkedList: newSinglyLinkedListDS,
      arrayValues: []
    })
  }

  handleAdd(evt) {
    let newSinglyLinkedListDS = this.state.linkedList;
    evt.preventDefault();
    let itemToAdd = evt.target.addItem.value;
    newSinglyLinkedListDS.add(itemToAdd);
    this.setState({
      linkedList: newSinglyLinkedListDS,
      arrayValues: newSinglyLinkedListDS.getAllValues()
    });
  }

  handleAddFirst(evt) {
    let newSinglyLinkedListDS = this.state.linkedList;
    evt.preventDefault();
    let itemToAdd = evt.target.addItem.value;
    newSinglyLinkedListDS.addFirst(itemToAdd);
    this.setState({
      linkedList: newSinglyLinkedListDS,
      arrayValues: newSinglyLinkedListDS.getAllValues()
    });
  }

  handleInsertAt(evt) {
    let newSinglyLinkedListDS = this.state.linkedList;
    evt.preventDefault();
    let itemToAdd = evt.target.addItem.value;
    let indexToAdd = evt.target.index.value;
    newSinglyLinkedListDS.insertAt(itemToAdd, parseInt(indexToAdd));
    this.setState({
      linkedList: newSinglyLinkedListDS,
      arrayValues: newSinglyLinkedListDS.getAllValues()
    });
  }

  handleRemove(evt) {
    let newSinglyLinkedListDS = this.state.linkedList;
    evt.preventDefault();
    newSinglyLinkedListDS.remove();
    this.setState({
      linkedList: newSinglyLinkedListDS,
      arrayValues: newSinglyLinkedListDS.getAllValues()
    });
  }

  handleRemoveFirst(evt) {
    let newSinglyLinkedListDS = this.state.linkedList;
    evt.preventDefault();
    newSinglyLinkedListDS.removeFirst();
    this.setState({
      linkedList: newSinglyLinkedListDS,
      arrayValues: newSinglyLinkedListDS.getAllValues()
    });
  }



  render() {
    console.log(this.state.arrayValues)
    return (
      <div className='stack-container'>
        <div>
          <h3 className='ds-header'>Singly Linked List</h3>
          <div className='ds-explanation'>
            <p><b>What is a singly linked list?</b> To be completed.</p>
          </div>
        </div>
        {
          (!this.state.linkedList) ?
            <div>
              <h3>Loading..</h3>
            </div>
            :
            <div>

              <div>
                <PushForm handleAdd={this.handleAdd} handleRemove={this.handleRemove}
                  handleInsertAt={this.handleInsertAt}
                  handleRemoveFirst={this.handleRemoveFirst}
                  handleAddFirst={this.handleAddFirst} linkedList={this.state.linkedList} arrayValues={this.state.arrayValues} />
              </div>
              <div>
                <h5 className='stack-header'>The Singly Linked List</h5>
                <SinglyLinkedListDisplay linkedList={this.state.linkedList} arrayValues={this.state.arrayValues} />
              </div>

            </div>
        }
        <div>

        </div>

      </div >
    )
  }
}

export default SinglyLinkedList;
