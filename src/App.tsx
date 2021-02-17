import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './Home/Home';
import './App.scss';
import { Opportunity } from './Opportunity/opportunity';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rovers/opportunity">
          <Opportunity />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
