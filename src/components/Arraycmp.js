import React from 'react'
import {useState} from 'react'

function Arraycmp() {
    const [items, setItems] = useState([{id: 0, val: 5}])
    function addElement() {
        setItems([...items, {id: items.length, val: Math.floor(Math.random() * 10 + 1)}])
    }
  return (
    <div>
        <button onClick={addElement}>Add item</button>
        {items.map((item) => <h1 key={item.id}>{item.val}</h1>)}
        {/* <ul>
            {items.map((item) => <li key={item.id}>{item.val}</li>)}
        </ul> */}
    </div>
  )
}

export default Arraycmp