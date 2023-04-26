import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        {/* ************ NEED OF HOOKS ************

        Reason Set 1 :
          *  `this` keyword works differently in JS. So, understand how it works.
          *  Remember to bind event handlers in class component
          *  Classes don't minify very well & make hot reloading very unreliable
           
        
        Reason Set 2 :
          *  There is no particular way to Reuse stateful component logic
          *  HOC & render prop method, do solve/address this problem.
          *   (but makes the code hard to follow)
          * 
          *   So, that's why there is a need to share a needful Logic in better way.
          * 
      

        Reason Set 3 :
          *  Related code is not organised at one place.
                  eg. : create component for complex scenarios such as [Data fetching and subscribing to events]

          *  Ex : Data fetching : in componentDidMount & componentDidUpdate
          *  Ex : Event listeners : in componentDidMount & componentDidUnmount
        *  { means both the above examples are implemented in "componentDidMount", which completely different from each other.} 
          *
          * 
          * 
          * 
          * Because of stateful - Cannot break component into smaller ones
            
-------------------------------------------------------------------------------------------------------------------------------------------------------------------






************************************************  useState Hook  ********************************************************
            

                  // ********** Branches Chronological order ***********
          
                Master
                useStateHook        +        (useState-with-prev-state)
                useState-with-object
                useState4-with-array
            






                *********** summary *********

                The useState hook let you add state in functional components.

                In classes, state is always an object.

                With useState hook, the state doesn't have to be an object

                The useState hook returns an array with 2 elements :
                * 1st element is current-value of state 
                * 2nd element is a state-setter fucntion

                If New state value depends on previous state value? you can pass a fucntion to the setter function.

                When dealing with objects or arrays, always make sure to spread state-Variable then call the setter function.






-------------------------------------------------------------------------------------------------------------------------------------------------------------------

************************************************  useEffect Hook  ********************************************************

          the Effect Hook let you perform *side effect* in "functional component".

          It is close replacement of componentDidMount, componentDidUpdate & componentWillUnmount



        */}



    </div>
  );
}

export default App;
