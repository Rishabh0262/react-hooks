import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      

      {/*  **********************  useMemo-Hook  *************************

          We want to tell the react to not to recalculate certain values unnecessary specially the one which takes a long time to compute
          [isEven() should not trigger, if counter2 is clicked] 

          1st value in useMemo() : the function whose return value needs to be cached.
          [here we are going to use, the Arrow-Function. whose "return" value needs to be cached.]

          2nd arguments : We need to specify dependancies. [here it depends on the value of "counter1".]

          3rd Step : useMemo returns to a "cached" value. which we are going to assign to "isEven".

          Last : Now remove the Function call. As it is now a variable.

          

      */}
         <Counter />


    </div>
  );
}

export default App;
