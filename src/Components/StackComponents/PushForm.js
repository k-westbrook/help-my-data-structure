import React from 'react';
import '../../App.css';


class PushForm extends React.Component {
  render() {
    return (
      <div >
        <form onSubmit={this.props.handlePush}>
          <div>
            <label>
              <div>
                <h5>Item to Push</h5>
              </div>
              <div>
                <input type='text' name="pushedItem" required />
              </div>
            </label>
          </div>
          <div>
            <div>

              <button>PUSH</button>
            </div>
          </div>
        </form>
        <div>
          <button onClick={this.props.handlePop}>POP</button>
        </div>
        <div>
          <button onClick={this.props.handlePeek}>PEEK</button>
        </div>
      </div >
    );
  }
}

export default PushForm
