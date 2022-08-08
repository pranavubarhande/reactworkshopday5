import React from 'react'
import {useState} from 'react'

function Simpleusestate() {
    const [name, changeName] = useState("Pranav")
  return (
    <div>
        {name}
        <div><button onClick={() => changeName("Harsh")}>Change Name</button></div>
    </div>
  )
}

export default Simpleusestate