import React from 'react';
import { UseState } from './UseState.jsx';
import { ClassState }  from './ClassState.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="Use State"/>
      <ClassState name="Class State"/>
    </div>
  );
}

export default App;
