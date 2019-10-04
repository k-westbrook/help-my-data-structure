import React from 'react';
import '../../App.css';

export default function SinglyLinkedListDisplay(props) {

  let count = -1;
  let length = props.arrayValues.length;
  return (
    < div className='stack-display-container' >
      {
        props.arrayValues.map(value => {
          count++;
          return (
            <div className='list-pair' key={count}>

              <div className='list-item' key={count}>
                <p>{value}</p>
              </div>
              {(count < length - 1) ?
                < div className='arrow-item' key={count}>
                  <p>-></p>
                </div>
                :
                <div>
                </div>
              }
            </div >
          )
        }
        )
      }
    </ div>
  )
}

