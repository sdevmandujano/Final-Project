import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Games from "./components/Games";

class Selection extends Component {
  state = {
  };
  
  render() {
    return (
      <div className="App">
      <Nav />
      <Jumbotron>
        <h3 className="jumbo-title">Live Games:</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/mP36g8I_0GY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      </Jumbotron>
<div className="container">
      <Games />
</div>
</div>
    ) 
  }
}

export default Selection;
