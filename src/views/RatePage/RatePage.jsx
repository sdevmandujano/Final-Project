import React, { Component } from "react";
import { RateCard } from "../../components/RateCard/RateCard";
import { CommentsPanel } from "../../components/CommentsPanel/CommentsPanel";
import {
    Grid,
    Row,
    Col
  } from "react-bootstrap";
import { Card } from "../../components/Card/Card.jsx";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import avatar from "../../assets/img/rodolfo.jpg";
import imagen from "../../assets/img/sidebarback.jpg";
import 'react-widgets/dist/css/react-widgets.css';
import API from "../../utils/DatabaseRoutes";

class RatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      }
  }

  sendMessage(message) {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          {message
          }        </div>
      ),
      level: "danger",
      position: "tr",
      autoDismiss: 15
    });
  }

  componentDidMount() {
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

  loadGames = () => {
    console.log("Loading Games for menu");
    API.getGames()
      .then(res => {
        console.log(res.data);
        this.setState({
          gamesOptions: res.data
        })
      }
      )
      .catch(err => console.log(err));

  };


  handleFormSubmit = event => {
    console.log("submit form");
    event.preventDefault();
    this.notifyClick();

  };


  
    render() {
        return (
<div className="content">
<Grid fluid>
<Row>
    <Col md={6}>
    <Card
    title="Calificación"
    content={
        <RateCard games={this.state.gamesOptions} comments={this.state.comments} score={this.state.score}/>
    }
    />
    </Col>

    <Col md={6}>
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
                    <Button simple>
                    <i class="fab fa-twitch fa-3x"></i>
                    </Button>
                    <Button simple>
                    <i class="fab fa-steam fa-3x"></i>
                    </Button>
                  </div>
                }
              />
    </Col>
</Row>

    <Card
        title="Opiniones"
        content={
      <CommentsPanel score={this.state.comments}/>
        }
      />

</Grid>
</div>
        );
    }
}

export default RatePage;