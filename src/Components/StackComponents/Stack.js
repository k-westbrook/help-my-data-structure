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
              <PushForm handlePush={this.handlePush} handlePop={this.handlePop} handlePeek={this.handlePeek} />
            </div>
            <div>
              <h5 className='stack-header'>The Stack</h5>
              <StackDisplay stack={this.state.stack} />
            </div>

            <div>
              <h5 className='stack-peek'>Peek:</h5>
              {(!this.state.isPeek) ?
                <div>
                  <p>Push Peek to get Top of Stack!</p>
                </div> :
                <div>
                  {(this.state.peek) ?
                    <div>
                      <p>{this.state.peek}</p>
                    </div> :
                    <div>
                      <p>Stack is Empty</p>
                    </div>
                  }
                </div>

              }
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
