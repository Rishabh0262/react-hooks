// Complex state & action. As we will be using 'Object' for state & action.
// USE : of this pattern
        // Scenario 1 : Concern the value by which the INC. and DEC. will be done!
                       //  * So, By making use of action as an object. We can use additional Data in the reducer function.
        // Scenario 2 :
import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {firstCounter : state.firstCounter + action.value};
        case "decrement":
            return {firstCounter : state.firstCounter - action.value };

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
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1  })}>Decrement</button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: "decrement", value: 5  })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    );
}

export default Counter2;
