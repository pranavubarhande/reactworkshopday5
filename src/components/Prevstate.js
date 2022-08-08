import React from 'react'
import {useState} from 'react'

function Prevstate() {
    const [count, setCount] = useState(0) 
    function incrementFive(){
        setCount(prevCount => prevCount +1)
        setCount(prevCount => prevCount +1)
        setCount(prevCount => prevCount +1)
        setCount(prevCount => prevCount +1)
        setCount(prevCount => prevCount +1)

    }
     return (
    <div>
        Count : {count}
        <div><button onClick={() => {setCount(0)}}>Reset</button></div>
        <div><button onClick={() => setCount(prevCount => prevCount + 1)}>Increment by 1</button></div>
        <div><button onClick={incrementFive}>Increment by 5</button></div>
    </div>
  )
}

export default Prevstate