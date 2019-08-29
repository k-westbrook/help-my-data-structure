import React from 'react';
import '../../App.css';
import { StackDS } from '../../DataStructures/StackDS'
import PushForm from './PushForm';

class Stack extends React.Component {

  constructor() {
    super();
    this.state = {
      stack: null
    }
    this.handlePush = this.handlePush.bind(this);
    this.handlePop = this.handlePop.bind(this);
  }

  componentDidMount() {
    let newStackDS = new StackDS();

    this.setState({
      stack: newStackDS
    })
  }

  handlePush(evt) {

    evt.preventDefault();
    let itemToBePushed = evt.target.pushedItem.value;
    this.state.stack.push(itemToBePushed);
    console.log(this.state.stack)

  }

  handlePop(evt) {
    this.state.stack.pop();
    console.log(this.state.stack)
  }
  render() {

    return (
      <div className='stack-container'>
        <div>
          <p>Stack</p>
        </div>
        {(!this.state.stack) ?
          <div>
            <h3>Loading..</h3>
          </div>
          :
          <div>
            <div>
              <h3>the stack</h3>
            </div>
            <div>
              <PushForm handlePush={this.handlePush} handlePop={this.handlePop} />
            </div>
          </div>
        }
        <div>

        </div>

      </div>
    )
  }
}

export default Stack;
