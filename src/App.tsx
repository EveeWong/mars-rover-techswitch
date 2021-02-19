import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './Home/Home';
import { RoverSelection } from './RoverSelection/RoverSelection';
import './App.scss';
import { Curiosity} from './Curiosity/curiosity';
import { Opportunity } from './Opportunity/opportunity';
import { Spirit } from './Spirit/spirit';
import { News } from './News/News';
import { Footer } from './Footer/Footer';
import './App.scss';
import reducer from './reducer';

function App() {
 
  const [state, dispatch] = useReducer(reducer, {
		isDark: false
	});

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rovers/opportunity">
          <Opportunity />
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
