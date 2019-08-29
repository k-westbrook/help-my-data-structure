import React from 'react';
import '../../App.css';
import { StackDS } from '../../DataStructures/StackDS'
import PushForm from './PushForm';
import StackDisplay from './StackDisplay';

class Stack extends React.Component {

  constructor() {
    super();
    this.state = {
      stack: null,
      isPeek: false,
      peek: null
    }
    this.handlePush = this.handlePush.bind(this);
    this.handlePop = this.handlePop.bind(this);
    this.handlePeek = this.handlePeek.bind(this);
  }

  componentDidMount() {
    let newStackDS = new StackDS();

    this.setState({
      stack: newStackDS
    })
  }

  handlePush(evt) {
    let newStackDS = this.state.stack;
    evt.preventDefault();
    let itemToBePushed = evt.target.pushedItem.value;
    newStackDS.push(itemToBePushed)
    this.setState({ stack: newStackDS, isPeek: false });

  }

  handlePop() {
    let newStackDS = this.state.stack;
    newStackDS.pop();
    this.setState({ stack: newStackDS, isPeek: false });
  }

  handlePeek() {
    const top = this.state.stack.peek();
    this.setState({ isPeek: true, peek: top });

  }
  render() {

    return (
      <div className='stack-container'>
        <div>
          <h3 className='ds-header'>Stack</h3>
          <div className='ds-explanation'>
            <p><b>What is a stack?</b> A stack is a data strucutre that stores data like it says in its name --like a stack of pancakes.
          It follows the LIFO- Last In, First Out Order. You push an element in and another and another. The elements are removed by the pop function which pops from the end.  The peek function looks at the element next to be popped. Try a stack out!</p>
          </div>
        </div>
        {
          (!this.state.stack) ?
            <div>
              <h3>Loading..</h3>
            </div>
            :
            <div>

              <div>
                <PushForm handlePush={this.handlePush} handlePop={this.handlePop} handlePeek={this.handlePeek} isPeek={this.state.isPeek}
                  peek={this.state.peek} stack={this.state.stack} />
              </div>
              <div>
                <h5 className='stack-header'>The Stack</h5>
                <StackDisplay stack={this.state.stack} />
              </div>

            </div>
        }
        <div>

        </div>

      </div >
    )
  }
}

export default Stack;
