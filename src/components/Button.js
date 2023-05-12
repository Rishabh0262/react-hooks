import React from 'react'

function Button({handleClick, children}) {
    console.log("Rendering Button - " , children)
    // console.log("Rendering " + children)     // All ways are correct
    // console.log(`Rendering ${children}`)  
  return (
    <div>
        <button onClick={handleClick}>
            {children}
        </button>
        
    </div>
  )
}

export default Button