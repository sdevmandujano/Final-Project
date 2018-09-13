import React, { Component } from "react";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import GamePage from "../../components/GamePage";
import ClosedNav from "../../components/closedNav/closedNav";
import OpenNav from "../../components/openedNav/openedNav";

class Game extends Component {
  state = {
    currentNav: "closed"
  };

  handlePageChange = nav => {
    this.setState({ currentNav: nav});
  };

  renderPage =() => {
    if (this.state.currentNav === "closed") {
      return <ClosedNav 
      currentNav={this.state.currentNav}
      handlePageChange={this.handlePageChange}
      />;
    } else {
      return <OpenNav 
      currentNav={this.state.currentNav}
      handlePageChange={this.handlePageChange}
      /> 
    }
  };

  render() {
    return (
      <div className="App">
      <Nav />
      {this.renderPage()}
      <Jumbotron>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/mP36g8I_0GY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      </Jumbotron>
<div className="container">
      <GamePage />
</div>
</div>
    ) 
  }
}

export default Game;