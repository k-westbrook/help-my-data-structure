import React from 'react';
import '../../App.css';


class PushForm extends React.Component {
  render() {
    return (
      <div >
        <form>
          <div>
            <label>
              <div>
                <h5>Item to Push</h5>
              </div>
              <div>
                <input type='text' required />
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
          <button>POP</button>
        </div>
        <div>
          <button>PEEK</button>
        </div>
        <div>
          <button>isEmpty</button>
        </div>
      </div >
    );
  }
}

export default PushForm
