import React from 'react';
import Home from './components/Home'
import FactOne from './components/FactOne'
import FactTwo from './components/FactTwo'
import FactThree from './components/FactThree'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Switch>
          <Route path='/factOne' component={FactOne} />
          <Route path='/factTwo' component={FactTwo} />
          <Route path='/factThree' component={FactThree} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
