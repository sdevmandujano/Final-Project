import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    Button,
  } from "react-bootstrap";
import {Modal} from "react-bootstrap";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import { RateCard } from "../../components/RateCard/RateCard";
import { CommentsPanel } from "../../components/CommentsPanel/CommentsPanel";
import { Card } from "../../components/Card/Card.jsx";
import imagen from "../../assets/img/sidebarback.jpg";
import 'react-widgets/dist/css/react-widgets.css';
import "../../views/GamePage/Gamepage.css";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import axios from "axios";
import API from "../../utils/DatabaseRoutes";

export class GamePage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          preview: null,
          isOpen: false ,
            username: "",
            email: "",
            twitch:"",
            gamesOptions: [],
            steam:"",
            url:null,
            comments:[],
            user:"",
            _notificationSystem: null
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }    

      state = {
        data: null,
        top: []
      };
    
      componentDidMount() {
        this.searchGiphy();

        console.log("the user from props " + this.props.url)   
    API.getUserId(this.props.email).then(res => {
      if (res.data){
       // If user is in database then load from DB
       this.setState({
        user:res.data._id
      });
        this.loadUser()
      }
      else {
        this.sendMessage("Completa tu perfil antes de iniciar") ;
      }
      
    });
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

      loadUser = () => {
        API.getUser(this.state.user)
          .then(res => {
            this.setState({
              username: res.data[0].username,
              score: res.data[0].score,
              email: res.data[0].email,
              steam: res.data[0].steam,
              twitch: res.data[0].twitch,
              comments: res.data[0].comments,
              url: res.data[0].url,
              _notificationSystem: this.state.username
            });
          })
          .catch(err => console.log(err));
      };

    render() {
        return (
 
<div className="content">

<Jumbotron>
<div>
        {this.state.data ? (
          <div
            className="mx-auto"
            dangerouslySetInnerHTML={{ __html: this.state.data.embed_html }}
          />
        ) : null}
      </div>
</Jumbotron>

<Grid fluid>
      <Row>
          <h1>Top Jugadores</h1>
      <Col md={3}>
      <UserCard
                bgImage={imagen}
                avatar={this.state.url}
                name={this.state.username}
                state="Usuario Activo"
                steam={
                  <span> {this.state.steam} </span>
                }
                twitch={
                  <span> {this.state.twitch} </span>
                }
                socials={
                    <div>
                      <Button simple onClick={this.handleShow}>
                      Detalles
                      </Button>
                    </div>
                  }
        />
        </Col>
      </Row>

      <Row>
          <h1>Jugadores</h1>
      <Col md={3}>
      <UserCard
                bgImage={imagen}
                avatar={this.state.url}
                name={this.state.username}
                state="Usuario Activo"
                steam={
                  <span> {this.state.steam} </span>
                }
                twitch={
                  <span> {this.state.twitch} </span>
                }
                socials={
                    <div>
                      <Button simple onClick={this.handleShow}>
                      Detalles
                      </Button>
                    </div>
                  }
        />
            </Col>        
      </Row>
</Grid>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Jugador</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <Card
    title="Calificación"
    content={
        <RateCard games={this.state.gamesOptions} comments={this.state.comments} score={this.state.score}/>
    }
           />

<Card
  title="Opiniones"
  content={
<CommentsPanel score={this.state.comments} />
  }
/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
</div>
        );
    }
}