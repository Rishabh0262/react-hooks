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
            


        */}



    </div>
  );
}

export default App;
