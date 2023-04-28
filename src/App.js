import logo from './logo.svg';
import './App.css';
import ClassCounter1 from './components/ClassCounter1';
import Hookcounter1 from './components/Hookcounter1';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">


      {/*{console log} here we'll use the replacement for ComponentWillUnmount in RFCE */}
        <MouseContainer />











    {/* {console log} It is a replacement CompenentDidUnmount ******* */}
      {/* <HookMouse /> */}


{/*       {console log}  Here We are practicing to Run Effect only once. Which can be easily done in RCE via   ******** */}
        {/* <ClassMouse /> */}










{/*      Here we've used the useEffect Hook, to repalce RCE's comp.DidMount, comp.didUpdate */}
    {/* <Hookcounter1 /> */}


{/*       A simple example for effects in class-component       */}
      {/* <ClassCounter1 /> */}



    </div>
  );
}

export default App;
