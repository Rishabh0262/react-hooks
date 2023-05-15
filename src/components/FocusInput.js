// #1     import 'useRef' from react
import React, {useEffect, useRef } from 'react'           

function FocusInput() {

// #2     create a 'useRef' variable ... assign it to null.
    const inputRef = useRef(null)





// #4   implementing the DOM manipulation. In 'useEffect'.
    useEffect(() => {
        // focus the input element.
        inputRef.current.focus()                  // current is a property comes from React,  The ref's current property to the corresponding DOM node
        
    }, [])



    

// #3      using the 'useRef-variable' at the appropiate position.
  return (
    <div>
        {/* i.e.    HERE             */}
        <input ref={inputRef} type='text'  />
    </div>
  )
}

export default FocusInput