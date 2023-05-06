import logo from './logo.svg';
import React, {useReducer, useContext} from 'react';
import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'


export const CountContext = React.createContext() 


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






function App() {
  const [count, dispatch] = useReducer(reducer, initialState)


  return (
    <CountContext.Provider 
      value={{countState : count, countDispatch : dispatch}} 
    >
        <div className="App">
          count : {count}
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
    </CountContext.Provider>

/*    useReducer with useContext

(From README.md)

                          App.js         (count = 0)  // we'll maintain Counter State in App.js & but we share the state deep down the ComponentTree
                            |
          A-----------------B-----------------C
                            |                 |
                            D                 E
                                              |
                                              F
[in App.js]
    Step 1 : Defining initialState value.  "reducer-Function".         // the Function i.e, passed as 1st parameter to the useReducer-Hook.

    Step 2 : We want to 'dispatch' 'actions' from the nested components.
    Step 3 :  in App.js, we created Counter with reducer-Hook

            Step 3.1 : We declared the initial-state & declare the reducer() , which midifies the state!
            Step 3.2 : We pass it to as parameter, to useReducer-Hook. Which RETURNs the "Current-State-Value" & "Dispatch-Method".
            Step 3.3 : To Provide these pair of values. We created a Context = CountContext...


    Step 4 : At the Top-most level, we Provide these pair of values as an Object.  
    Step 5 : At necessary Component, we use useContext to get hold of the Context-Value & access the appropriate-values.

*/


      







// {/*   multiple useReducers   */}
//         {/* <Counter3 /> */}

//       {/* Complex state & action */}
//         {/* <Counter2 /> */}

//       {/* Simple state & action */}
//         {/* <Counter1 />  */}
        


//     {/* </div> */}


  );
}

export default App;
