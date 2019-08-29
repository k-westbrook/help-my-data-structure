import React from 'react';
import '../../App.css';

export default function StackDisplay(props) {
  let count = -1;
  return (
    < div className='stack-display-container' >
      {
        props.stack.stack.map(item => {

          count++;
          return (
            <div className='stack-item' key={count}>
              <p>{item}</p>
            </div>
          )
        })
      }

    </div >
  )
}

