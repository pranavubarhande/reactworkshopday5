import React from 'react'
import {useState} from 'react'

function Objectcmp() {
    const [name, setname] = useState({fname: 'Pranav', lname: 'ubarhande'})
  return (
    <div>
        <form>
            <input type="text" value={name.fname} onChange = {(f) => setname({ fname: f.target.value})} />
            <input type="text" value={name.lname} onChange = {(e) => setname({ lname: e.target.value})} />
        </form>
        <h1>My first name is: {name.fname}</h1>
        <h1>My last name is: {name.lname}</h1>
    </div>
  )
}

export default Objectcmp