import React, {useState} from 'react'


function HookCounter2() {
    
    var initialVal = 0

    const [count , setCount] = useState(initialVal)

    const incrementFive = () => {
        for (let i = 0; i<5; i++)
        {
{/*  #1   */}             setCount(prevVal => prevVal + 1);         // #1  
                   // functionName(previous-value => previous-value & other do-able operations)
        } 
    }

    const decrementFive = () => {
         
            setCount(prevValue => prevValue - 5);              
    }

    return (
    <div>
        Count : {count} <br></br>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={() => setCount(initialVal)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Incement</button> <br></br>

        {/* eg. for vulnerability 

        to tackel which, we will be using 2nd form of 'setCount' func.
            We will be passing : instead of passing the new-State-variable.
#1                                    we'll pass a 'function' that has access to old-state-value.    
        
        */}

        <button onClick={incrementFive}>Increment 5 </button> : 'using for loop, <b> Now it's working </b> properly'<br/>
        <button onClick={decrementFive}>Decrement 5 </button> : '<b> without </b> using for loop. <b> direct</b> increment using <b> "setState"</b>  '
        

    </div>
  )
}

export default HookCounter2