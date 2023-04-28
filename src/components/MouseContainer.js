import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse'

//  Here have created a state that will initally display the <HookMouse /> content.
//  but later on clicking the switch the <HookMouse /> toggles its display/visibility.

// Problem : it doesnot restricts the console logs of the <HookMouse/>

function MouseContainer() {

    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={() => setDisplay(!display)} >Toggle display coordiates</button>
        {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer