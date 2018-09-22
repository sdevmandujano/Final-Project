import React, { Component } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card.jsx";
import "./Selection.css";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

class Selection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      top: []
    };
  }


  
  componentDidMount() {
    this.searchGiphy();
    this.searchTop();
  }

  openPlayers = () =>{
    console.log("click on image")
  }

  searchGiphy = () => {
    axios
      .get(
        "https://api.twitch.tv/kraken/clips/top?limit=1&game=Fortnite&trending=true",
        {
          headers: {
            "Client-ID": "4sq1xbwvhlr0nn95o51t91c0pfmajm",
            Accept: "application/vnd.twitchtv.v5+json"
          }
        }
      )
      .then(result => {
        console.log(result);
        this.setState({ data: result.data.clips[0] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchTop = () => {
    axios
      .get("https://api.twitch.tv/kraken/games/top", {
        headers: {
          "Client-ID": "4sq1xbwvhlr0nn95o51t91c0pfmajm",
          Accept: "application/vnd.twitchtv.v5+json"
        }
      })
      .then(result => {
        console.log(result);
        this.setState({ top: result.data.top });
      })
      .catch(error => {
        console.log("ERROR BAJANDO EL TOP");
        console.log(error);
      });
  };


  render() {
    return (
  <div className="selectteam content">
<Grid fluid>
    <Row>
  
    <Col className="mx-auto"  md={6}>
    {this.state.data ? (
          <div 
            className="container2"
            dangerouslySetInnerHTML={{ __html: this.state.data.embed_html }}
          />
        ) : null}

     </Col>
    </Row>  
  
      <Row>
        <h3>Selecciona un Juego</h3>
      {this.state.top.map(element => {
      return <Col className="mx-auto" sm="4" md={3}><img className="gamesgrid" onClick={this.openPlayers} src={element.game.box.large} /></Col>;
      })}
      </Row> 
  </Grid>
   </div>
 
    ) 
  }
}

export default Selection;
