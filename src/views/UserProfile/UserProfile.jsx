import React, { Component } from "react";
import NotificationSystem from "react-notification-system";
import { style } from "../../variables/Variables.jsx";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import Multiselect from 'react-widgets/lib/Multiselect'
import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import 'react-widgets/dist/css/react-widgets.css';
import API from "../../utils/DatabaseRoutes";

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: null,
      isOpen: false ,
        username: "",
        email: "",
        twitch:"",
        Ciudad: "",
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
  this.loadGames();
})

  }

  loadUser = (id) => {
    console.log("loading");
   API.getUser(id)
     .then(res =>{
      console.log("response " + this.state.username)
      this.setState({ username: res.data[0].username,
      email: res.data[0].email, Steam: res.data[0].steam, twitch: res.data[0].twitch,comments: res.data[0].about, url: res.data[0].url,_notificationSystem: this.state.username});
      
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

  toggleModal = (event) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    let gamesOptions = ['orange', 'red', 'blue', 'purple'];
    

    return (
      <div className="content">
      <NotificationSystem ref="notificationSystem" style={style} />
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edita tu Perfil"
                content={
                  <form>
                    <FormInputs 
                      ncols={["col-md-5", "col-md-5"]}
                      proprieties={[
                        {
                          label: "Nombre de Usuario",
                          type: "text",
                          value:this.state.username,
                          name:"username",
                          placeholder: "Nombre de Usuario",
                          onChange: this.handleInputChange,
                        },
                        {
                          label: "Email",
                          type: "email",
                          placeholder: "Email",
                          onChange: this.handleInputChange,
                          value:this.state.email,
                          name:"email",
                        }
                      ]}
                    />

                    <FormInputs 
                      ncols={["col-md-4","col-md-4"]}
                      proprieties={[
                        {
                          label: "Usuario Steam (Opcional)",
                          onChange: this.handleInputChange,
                          type: "text",
                          placeholder: "Steam",
                          value:this.state.Steam,
                          name:"Steam",
                        },                        
                        {
                          label: "Usuario Twitch (Opcional)",
                          type: "text",
                          placeholder: "Twitch",
                          onChange: this.handleInputChange,
                          value:this.state.twitch,
                          name:"twitch",
                        }
                
                      ]}
                    />
                    <Row>
                      <Col md={12}>
                      <div>
                          <ControlLabel>SELECCIONA LOS JUEGOS A ENCONTRAR EQUIPO</ControlLabel>
                          <Multiselect 
                            textField="name"
                            data={gamesOptions}
                            value={this.state.prefGames}
                            onChange={value =>  this.setState({ prefGames: value })}
                            />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup>
                          <ControlLabel>Acerca de Mi</ControlLabel>
                          <FormControl
                            rows="5"
                            value={this.state.comments}
                            onChange={value =>  this.setState({ comments: value })}
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Soy el mejor gamer de la historia"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="danger" onClick={this.handleFormSubmit} pullRight fill>
                      Actualizar
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
            <Card
                title="Avatar"
                content={
                  <img src={this.props.url}  redirect alt="Preview" />
                }
                />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
