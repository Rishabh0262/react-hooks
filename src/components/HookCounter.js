import React, {useState} from 'react'

function HookCounter() {

    // useState() is a Hool/Function()
        //  Hook accepts an argument i.e, an initial value of the 'state-property'.
        //  returns : <current value> of the 'state-property' & a 'Method' i.e, capable of <'UPDATE'> 'state-property'.

    const [count, setCount] = useState(0)    //    -------------------------------    Syntax is Array-destructuring. i.e, a Feature in ES6.
    //    [<stateVariableName>, <handlerFunctionName()>] = useState(<initial_state_value>)

  return (
    <div>
        <button onClick={() => setCount(count + 1)}> Func count {count}</button>     {/* ???  */  }
    </div>
  )
}

export default HookCounter

// ??? : What if the <Handler-funtion> is NOT a one liner code. as in here (count + 1)
            //  something... but now I forgot!
