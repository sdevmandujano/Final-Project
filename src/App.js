import React, { Component } from 'react';
import Dashboard from "./layouts/Dashboard/Dashboard";
import Landing from "./views/Landing";
import 'bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/pe-icon-7-stroke.css";

import indexRoutes from "./routes/index"

class App extends Component {
  state = {
    isLoggedIn:false,
    userID: '',
    name: '',
    email: '',
    picture: '',
    user:''
  }

  responseFacebook = response => {
    console.log("This is the response from FB: ")
    console.log(response)
    this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
    });
}

  render() {
    return (
      <Router>
      <div className="App">
          <Switch>
            {indexRoutes.map((prop, key) => {
                return (
                  <Route 
                    path={prop.path}
                    key={key}
                    render={(props) => this.state.isLoggedIn ? (<Dashboard {...props} user={this.state.userID} url={this.state.picture}/>) : (<Landing responseFacebook={this.responseFacebook}/>)}/>
                );
            })}
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
