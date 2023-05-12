import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      
    {/* Console check,  useCallback-Hook */}
      <ParentComponent />

      {/* 

        Currently we are facing an issue i.e, on changing any of the state-var, we are seeing 'Re-rendering of all the 5 components'.

        (partial) Resolution : we can use "React.Memo(componentName)" on exporting the Component. 
      
      
      */}

    </div>
  );
}

export default App;
