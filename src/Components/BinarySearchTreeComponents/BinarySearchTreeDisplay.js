import React from 'react';
import '../../App.css';

export default function BinarySearchTreeDisplay(props) {
  let countRow = -1;
  let countItem = 100 * countRow * 90;
  return (
    < div className='tree-display-container' >
      {
        props.valuesArray.map(row => {

          countRow++;

          return (
            <div className='tree-row' key={countRow}>
              {row.map(node => {
                countItem++;
                return (
                  <div className="tree-item" key={countItem}>
                    {(node.value !== "empty") ?
                      < p > {node.value}</p>

                      :
                      < p > Add Child</p>
                    }
                  </div>


                )
              })

              }

            </div>
          )

        })
      }

    </div >
  )
}

