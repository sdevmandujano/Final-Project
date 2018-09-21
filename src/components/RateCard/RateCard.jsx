import React, { Component } from "react";
import {
    Grid,
    Row,
    Badge
} from "react-bootstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";
import AddRating from "../../views/AddRating/AddRating";
import API from "../../utils/DatabaseRoutes";

export class RateCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          preview: null,
          isOpen: false ,
            username: "",
            email: "",
            twitch:"",
            disabled: true,
            Steam:"",
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

    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <AddRating />
        } else {
            return null
        }
    }

    render() {
        return (
            <Grid fluid>
            <Row>
                <h1>
                    Puntaje de {this.state.username} <br />
                     <Badge>{this.state.score}</Badge> de <Badge>5</Badge> <i class="fas fa-star"></i>
                </h1>
            </Row>
            <Row>
                <h2>
                    120 Opiniones
                </h2>
            </Row>
            <div>
            <Button bsStyle="info" pullRight fill type="submit" onClick={this.setRedirect}>
                      Opinar
            </Button>
            {this.renderRedirect()}
            </div>
            </Grid>
        );
    }
}