import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './Home/Home';
import { RoverSelection } from './RoverSelection/RoverSelection';
import { Curiosity } from './Curiosity/curiosity';
import { Spirit } from './Spirit/spirit';
import { News } from './News/News';
import { Footer } from './Footer/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rovers/curiosity">
          <Curiosity />
        </Route>
        <Route exact path="/rovers/spirit">
          <Spirit />
        </Route>
        <Route exact path="/rovers">
          <RoverSelection />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
