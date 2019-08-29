import React from 'react';
import '../../App.css';

export default function QueueDisplay(props) {
  let count = -1;
  return (
    < div className='stack-display-container' >
      {
        props.queue.queue.map(item => {

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

