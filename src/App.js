import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';

function App() {
  return (
    <div className="App">
      {/* ***** useState with previous State,  Hook in React *********** */}
      <HookCounter2 />

      {/*   ************ useState Hook in React ***********
      
      <ClassCounter />

      <HookCounter /> 
      */}

    </div>
  );
}

export default App;
