import React from 'react';
import '../../App.css';


class PushForm extends React.Component {
  render() {

    return (
      <div className='push-form' >
        <form onSubmit={this.props.handleAdd}>
          <div className='button-group'>
            <div >

              <button className='button-style'>ADD</button>
            </div>
            <label>
              <div >
                <h5 className="form-item-to-push">Item to Add</h5>
              </div>
              <div>
                <input className='form-item-input' type='text' name="addItem" required />
              </div>
            </label>
          </div>
          <div>

          </div>
        </form>
        <div className='button-group'>
          <button className='button-style' onClick={this.props.handleRemove}>REMOVE</button>
          <div className='peek-container'>

            {(!this.props.arrayValues.length === 0) ?
              <div>
                <h5> Linked List is Empty, Add an Item!</h5 >
              </div> :
              <div>
              </div>

            }
          </div>
        </div>

      </div >
    );
  }
}

export default PushForm
