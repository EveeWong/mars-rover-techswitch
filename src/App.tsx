import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './Home/Home';
import {RoverSelection} from './RoverSelection/RoverSelection'
import './App.scss';
import {Footer} from './Footer/Footer';


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
      <Footer />
    </Router>
  );
}

export default App;
