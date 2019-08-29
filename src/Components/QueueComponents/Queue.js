import React from 'react';
import '../../App.css';
import { QueueDS } from '../../DataStructures/QueueDS'
import PushForm from './PushForm';
import QueueDisplay from './QueueDisplay';

class Queue extends React.Component {

  constructor() {
    super();
    this.state = {
      queue: null,
      isPeek: false,
      peek: null
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handlePeek = this.handlePeek.bind(this);
  }

  componentDidMount() {
    let newQueueDS = new QueueDS();

    this.setState({
      queue: newQueueDS
    })

  }

  handleAdd(evt) {
    let newQueueDS = this.state.queue;
    evt.preventDefault();
    let itemToBePushed = evt.target.pushedItem.value;
    newQueueDS.add(itemToBePushed)
    this.setState({ queue: newQueueDS, isPeek: false });

  }

  handleRemove() {
    let newQueueDS = this.state.queue;
    newQueueDS.remove();
    this.setState({ queue: newQueueDS, isPeek: false });
  }

  handlePeek() {
    const top = this.state.queue.peek();
    this.setState({ isPeek: true, peek: top });

  }
  render() {

    return (
      <div className='stack-container'>
        <div>
          <h3 className='ds-header'>Queue</h3>
          <div className='ds-explanation'>
            <p><b>What is a queue?</b> A stack is a data strucutre that stores data like it says in its name --like a stack of pancakes.
            It follows the LIFO- Last In, First Out Order. You push an element in and another and another. The elements are removed by the pop function which pops from the end.  The peek function looks at the element next to be popped. Try a stack out!</p>
          </div>
        </div>
        {
          (!this.state.queue) ?
            <div>
              <h3>Loading..</h3>
            </div>
            :
            <div>

              <div>
                <PushForm handleAdd={this.handleAdd} handleRemove={this.handleRemove} handlePeek={this.handlePeek} isPeek={this.state.isPeek}
                  peek={this.state.peek} queue={this.state.queue} />
              </div>
              <div>
                <h5 className='stack-header'>The Queue</h5>
                <QueueDisplay queue={this.state.queue} />
              </div>

            </div>
        }
        <div>

        </div>

      </div >
    )
  }
}

export default Queue;
