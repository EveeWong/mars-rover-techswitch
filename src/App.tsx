import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './Home/Home';
import {RoverSelection} from './RoverSelection/RoverSelection'
import './App.scss';
import {Footer} from './Home/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rovers">
          <RoverSelection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
