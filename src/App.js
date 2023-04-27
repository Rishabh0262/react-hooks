import logo from './logo.svg';
import './App.css';
import ClassCounter1 from './components/ClassCounter1';
import Hookcounter1 from './components/Hookcounter1';

function App() {
  return (
    <div className="App">

{/*      Here we've used the useEffect Hook, to repalce RCE's comp.DidMount, comp.didUpdate */}
    {/* <Hookcounter1 /> */}


{/*       A simple example for effects in class-component       */}
      <ClassCounter1 />



    </div>
  );
}

export default App;
