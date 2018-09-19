import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Card } from "../../components/Card/Card.jsx";
import Jumbotron from "../../components/Jumbotron";
import GamePage from "../../components/GamePage";
class Game extends Component {
  state = {
    currentNav: "closed"
  };

  handlePageChange = nav => {
    this.setState({ currentNav: nav});
  };

  renderPage =() => {

  };

  render() {
    return (
  <div className="selectteam content">
<Grid fluid>
    <Row>
    <Col md={12}>
       <Jumbotron className="selectteam">
        <iframe className="mx-auto" title="provisional" width="100%" height="500" src="https://www.youtube.com/embed/mP36g8I_0GY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      </Jumbotron>
     </Col>
    </Row>  
    <Row>
    <Col className="mx-auto" md={10}>
    <Card 
    content={ <GamePage /> }>
    </Card>
    </Col>
    </Row> 
  </Grid>
   </div>
 
    ) 
  }
}

export default Game;