import React from 'react';
import '../../App.css';


class PushForm extends React.Component {
  render() {
    return (
      <div className='push-form' >
        <form onSubmit={this.props.handleAdd}>
          <div className='button-group-tree'>
            <div >

              <button className='button-style'>ADD</button>
            </div>
            <label>
              <div >
                <h5 className="form-item-to-push">Node to Add</h5>
              </div>
              <div>
                <input className='form-item-input' type='text' name="addedNode" required />
              </div>
            </label>
          </div>
          <div>

          </div>
        </form>

      </div>

    );
  }
}

export default PushForm
