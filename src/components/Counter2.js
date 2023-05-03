// Complex state & action. As we will be using 'Object' for state & action.
// USE : of this pattern
        // Scenario 1 : Concern the value by which the INC. and DEC. will be done!
                       //  * So, By making use of action as an object. We can use additional Data in the reducer function.

        // Scenario 2 : We'll see State as an object. By using State as an object we can keep track of 2 different counters.

// Well this approach is suited , "When dealing with Global State"... Here we are dealing with to local state.
import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter : 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, firstCounter : state.firstCounter + action.value};
        case "decrement":
            return {...state, firstCounter : state.firstCounter - action.value };
        case "increment2":
            return {...state, secondCounter : state.secondCounter + action.value};
        case "decrement2":
            return {...state, secondCounter : state.secondCounter - action.value };
    
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div> Count : {count.firstCounter} </div>
            <div> Second Count : {count.secondCounter} </div>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1  })}>Decrement</button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: "decrement", value: 5  })}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({ type: "increment2", value: 1 })}>Increment Counter 2</button>
                <button onClick={() => dispatch({ type: "decrement2", value: 1  })}>Decrement Counter 2</button>
            </div>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    );
}

export default Counter2;
