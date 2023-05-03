// Complex state & action. As we will be using 'Object' for state & action.
// USE : of this pattern
        // Scenario 1 : Concern the value by which the INC. and DEC. will be done!
        // Scenario 2 :
import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {firstCounter : state.firstCounter + 1};
        case "decrement":
            return {firstCounter : state.firstCounter - 1};

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
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    );
}

export default Counter2;
