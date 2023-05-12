import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      
    {/* Console check,  useCallback-Hook ...               also check README.md    */}
      <ParentComponent />

      {/*     useCallback-Hook works when we want only particular set of   

        Currently we are facing an issue i.e, on changing any of the state-var, we are seeing 'Re-rendering of all the 5 components'.

        (partial) Resolution : we can use "React.Memo(componentName)" on exporting the Component. partially in the sense,
                                it is still re-rendering both Age & Salary Components while changing any one of these Component.
                                
                                
        (Required Solution) : Only to re-render those components whose state has been changed.
      
      */}

    </div>
  );
}

export default App;
