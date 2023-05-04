// When dealing with Multiple State variables that has the same state transitions.
//   It is good to use multiple useReducer-Hook using same "reducer-function".

//          To avoid the complexity of merging the state, if it was to be an object
//          prevents duplication of code in "reducer-function".
import React, {useReducer} from 'react'

    const initialState = 0

    const reducer = (state , action) => {
        switch (action) {
            case 'increment' :
                return state + 1
            case 'decrement' :
                return state - 1
            case 'reset' :
                return initialState
            default :
                return state
        }

    }


function Counter3() {
    const [count , dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)

  return (
    <div>
        <div>
            <div> Count : {count} </div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
        <div>
            <div> Count 2 : {count2} </div>
            <button onClick={() => dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={() => dispatch2('reset')}>reset</button>
        </div>
    </div>
  )
}

export default Counter3