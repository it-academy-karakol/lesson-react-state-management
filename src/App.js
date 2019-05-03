import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import StateExample from './pages/StateExample/StateExample';
import ContextExample from './pages/ContextExample/ContextExample';
import ReducerExample from './pages/ReducerExample/ReducerExample';
import ReduxExample from './pages/ReduxExamle/ReduxExample';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={StateExample} />
      <Route path="/context-example" component={ContextExample} />
      <Route path="/reducer-example" component={ReducerExample} />
      <Route path="/redux-example" component={ReduxExample} />

    </div>
  );
}

export default App;
