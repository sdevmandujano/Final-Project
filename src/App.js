import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./views/Register";
import Landing from "./views/Landing";
import NoMatch from "./views/NoMatch";
import Selection from "./views/Selection";
import GameShow from "./components/GameShow";


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/user/:id" component={Selection} />
          <Route exact path="/games/:id" component={GameShow} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
