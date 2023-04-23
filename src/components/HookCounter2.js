import React, {useState} from 'react'


function HookCounter2() {
    
    var initialVal = 0

    const [count , setCount] = useState(initialVal)



    return (
    <div>
        Count : {count} <br></br>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(initialVal)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Incement</button> <br></br>

        

    </div>
  )
}

export default HookCounter2