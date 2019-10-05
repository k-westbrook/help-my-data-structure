import React from 'react';
import '../../App.css';

export default function SinglyLinkedListDisplay(props) {

  let count = -1;
  let length = props.arrayValues.length;
  return (
    < div className='stack-display-container' >
      {
        props.arrayValues.map(node => {
          count++;
          console.log(node)
          return (
            <div className='list-pair' key={count}>
              {(node.next) ?
                <div>
                  {(count === 0) ?
                    <div className='list-item' key={count}>
                      <p><b>Head</b><br />
                        value: {node.value} <br />
                        next: {node.next.value}</p>
                    </div>
                    :
                    <div className='list-item' key={count}>
                      <p>value: {node.value} <br />
                        next: {node.next.value}</p>
                    </div>
                  }
                </div>
                :
                <div>
                  {(count !== 0) ?
                    <div className='list-item' key={count}>
                      <p><b>Tail</b><br />
                        value:{node.value} <br />
                        next: null</p>
                    </div>
                    :
                    <div className='list-item' key={count}>
                      <p><b>Head</b><br />
                        <b>And</b><br />
                        <b>Tail</b><br />
                        value: {node.value} <br />
                        next: null</p>
                    </div>
                  }
                </div>

              }
              {(count < length - 1) ?
                < div className='arrow-item'>
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

