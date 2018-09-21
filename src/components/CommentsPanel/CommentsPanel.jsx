import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import API from "../../utils/DatabaseRoutes";

export class CommentsPanel extends Component {
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
          this.setState({ username: res.data[0].username, score: res.data[0].score, comments: res.data[0].comments,
          email: res.data[0].email, steam: res.data[0].steam, twitch: res.data[0].twitch, url: res.data[0].url,_notificationSystem: this.state.username});
          
         }
         )
        .catch(err => console.log(err));
      }; 

    render() {
        return (
            <div>
            <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Rodolfo opinó <Badge>5</Badge></Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                {this.state.comments}
            </Panel.Body>
          </Panel>
            </div>
        );
    }
}