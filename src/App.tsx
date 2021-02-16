import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div> Hello World! </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
