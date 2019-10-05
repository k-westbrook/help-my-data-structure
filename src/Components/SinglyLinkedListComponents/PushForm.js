import React from 'react';
import '../../App.css';


class PushForm extends React.Component {
  render() {

    return (
      <div className='push-form' >
        <div className='action-item'>
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
        </div>
        <div className='action-item'>
          <form onSubmit={this.props.handleAddFirst}>
            <div className='button-group'>
              <div >

                <button className='button-style'>ADD FIRST</button>
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
        </div>
        <div className='action-item'>
          <div className='button-group'>
            <button className='button-style' onClick={this.props.handleRemove}>REMOVE</button>
            <div className='peek-container'>

              {(this.props.arrayValues.length === 0) ?
                <div>
                  <h5> Linked List is Empty, Add an Item!</h5 >
                </div> :
                <div>
                </div>

              }
            </div>
          </div>
        </div>
        <div className='action-item'>
          <div className='button-group'>
            <button className='button-style' onClick={this.props.handleRemoveFirst}>REMOVE FIRST</button>
            <div className='peek-container'>

              {(this.props.arrayValues.length === 0) ?
                <div>
                  <h5> Linked List is Empty, Add an Item!</h5 >
                </div> :
                <div>
                </div>

              }
            </div>
          </div>
        </div>
        <div className='action-item'>
          <form onSubmit={this.props.handleInsertAt}>
            <div className='button-group'>
              <div >

                <button className='button-style'>ADD AT</button>
              </div>
              <label>
                <div >
                  <h5 className="form-item-to-push">Item to Add</h5>
                </div>
                <div>
                  <input className='form-item-input' type='text' name="addItem" required />
                </div>
              </label>
              <label>
                <div >
                  <h5 className="form-item-to-push">Index</h5>
                </div>
                <div>
                  <input className='form-item-input' type='text' name="index" required />
                </div>
              </label>
            </div>
            <div>

            </div>
          </form>
        </div>
        <div className='action-item'>
          <div className='button-group'>
            <button className='button-style' onClick={this.props.handleReverse}>REVERSE</button>
            <div className='peek-container'>

              {(this.props.arrayValues.length === 0) ?
                <div>
                  <h5> Linked List is Empty, Add an Item!</h5 >
                </div> :
                <div>
                </div>

              }
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default PushForm
