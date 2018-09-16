import React, { Component } from 'react';
import Dashboard from "./layouts/Dashboard/Dashboard";
import Facebook from './components/Facebook/Facebook'
import Landing from "./views/Landing";
import 'bootstrap';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/pe-icon-7-stroke.css";

import indexRoutes from "./routes/index"

class App extends Component {
  state = {
    isLoggedIn:true
  }
  render() {
    return (
      <Router>
      <div className="App">
          <Switch>
            {indexRoutes.map((prop, key) => {
              if (prop.name === "User")
                return (
                  <Route 
                    path={prop.path}
                    key={key}
                    render={(props) => this.state.isLoggedIn ? (<Dashboard {...props}/>) : (<Redirect to="/"/>)}/>
                );
              return (
                <Route  key={key} exact strict path="/" component={Landing}/>
                );
            })}
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
