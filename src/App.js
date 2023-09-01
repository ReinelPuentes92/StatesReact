import React from 'react';
import { UseState } from './UseState.jsx';
import { UseStateReducer } from './UseStateReducer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="Use State"/>
      <UseStateReducer name="Reducer State" />      
    </div>
  );
}

export default App;
