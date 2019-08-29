import React from 'react';
import '../../App.css';


class PushForm extends React.Component {
  render() {
    return (
      <div className='push-form' >
        <form onSubmit={this.props.handlePush}>
          <div className='button-group'>
            <div >

              <button className='button-style'>PUSH</button>
            </div>
            <label>
              <div >
                <h5 className="form-item-to-push">Item to Push</h5>
              </div>
              <div>
                <input className='form-item-input' type='text' name="pushedItem" required />
              </div>
            </label>
          </div>
          <div>

          </div>
        </form>
        <div className='button-group'>
          <button className='button-style' onClick={this.props.handlePop}>POP</button>
        </div>
        <div className='button-group'>
          <button className='button-style' onClick={this.props.handlePeek}>PEEK</button>
          <div className='peek-container'>

            {(!this.props.isPeek) ?
              <div>
                <h5> Push Peek to get Top of Stack!</h5 >
              </div> :
              <div>
                {(this.props.peek) ?
                  <div>
                    <p>{this.props.peek}</p>
                  </div> :
                  <div>
                    <p>Stack is Empty</p>
                  </div>
                }
              </div>

            }
          </div>
        </div>
      </div >
    );
  }
}

export default PushForm
