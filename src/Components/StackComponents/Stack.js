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
  }

  componentDidMount() {
    let newStackDS = new StackDS();

    this.setState({
      stack: newStackDS
    })
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
              <PushForm />
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
