import React, {useState} from 'react'


function HookCounter2() {
    
    var initialVal = 0

    const [count , setCount] = useState(initialVal)

    const incrementFive = () => {
        for (let i = 0; i<5; i++)
        {
            setCount(count + 1)
        }
    }

    const decrementFive = () => {
         
            setCount(count - 5)
         
    }

    return (
    <div>
        Count : {count} <br></br>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(initialVal)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Incement</button> <br></br>

        {/* eg. for vulnerability */}

        <button onClick={incrementFive}>Increment 5 </button> : 'using for loop, <b> not working </b> properly'<br/>
        <button onClick={decrementFive}>Decrement 5 </button> : '<b> without </b> using for loop. <b> direct</b> increment using <b> "setState"</b>  '
        

    </div>
  )
}

export default HookCounter2