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
        disabled: true,
        steam:"",
        prefGames: [],
        teams:[],
        url:null,
        comments:null,
        _notificationSystem: null
      }
  }
  componentDidMount() {
console.log("the user from props " + this.props.url)   
API.getUserId(this.props.email).then(res => {
  console.log(res.data);
  this.loadUser(res.data._id)
  this.loadGames();
})

  }

  loadUser = (id) => {
    console.log("loading");
   API.getUser(id)
     .then(res =>{
      console.log("response " + this.state.username)
      this.setState({ username: res.data[0].username, score: res.data[0].score,
      email: res.data[0].email, steam: res.data[0].steam, twitch: res.data[0].twitch,comments: res.data[0].about, url: res.data[0].url,_notificationSystem: this.state.username});
      
     }
     )
    .catch(err => console.log(err));
  }; 

  loadGames = () => {
    console.log("Loading Games");
    API.getGames()
    .then(res =>{
    console.log(res.data[0]);
    }
    )
   .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.email);

  };

  handleFormSubmit = event => {
    console.log("submit form");
    event.preventDefault();
    this.notifyClick();

  };

sendMessage(message){
  this.setState({ _notificationSystem: this.refs.notificationSystem });
  var _notificationSystem = this.refs.notificationSystem
  _notificationSystem.addNotification({
    title: <span data-notify="icon" className="pe-7s-gift" />,
    message: (
      <div>
{          message
}        </div>
    ),
    level: "warning",
    position: "tr",
    autoDismiss: 15
  });   
}
  notifyClick = () =>{
    console.log("click"); 
    this.sendMessage("Usuario Actualizado");
  }

    render() {
        return (
<div className="content">
<Grid fluid>
<Row>
    <Col md={6}>
    <Card
    title="Calificación"
    content={
        <RateCard />
    }
    />
    </Col>

    <Col md={6}>
    <UserCard
                bgImage={imagen}
                avatar={avatar}
                name={this.state.username}
                userName="Alfawarrior"
                description={
                  <span>
                    {this.state.twitch}
                    <br />
                    {this.state.steam}
                    <br />
                    {this.state.score}
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
    </Col>
</Row>

  <Card
  title="Opiniones"
  content={
<CommentsPanel />
  }
/>

</Grid>
</div>
        );
    }
}

export default RatePage;