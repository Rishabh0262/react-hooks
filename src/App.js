import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Rishabh" >
        <ChannelContext.Provider value={"codeIsEvil"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>


    </div>
  );
}

export default App;
