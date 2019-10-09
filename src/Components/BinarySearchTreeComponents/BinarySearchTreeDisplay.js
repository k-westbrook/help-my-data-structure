import React from 'react';
import '../../App.css';

export default function BinarySearchTreeDisplay(props) {
  let count = -1;
  return (
    < div className='stack-display-container' >
      {
        props.valuesArray.map(node => {

          count++;
          return (
            <div className='stack-item' key={count}>
              <p>{node.value}</p>
            </div>
          )
        })
      }

    </div >
  )
}

