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
//import { UserCard } from "../../components/UserCard/UserCard.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import 'react-widgets/dist/css/react-widgets.css';
import API from "../../utils/API";

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
        _notificationSystem: null
      }
  }
  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    console.log("loading");
   API.getUser()
     .then(res =>
     this.setState({ username: res.data.username}))
    .catch(err => console.log(err));
  }; 

  loadResults = (res) => {
    console.log("hello loading results");
     this.setState({ articlesResult: res.data });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.email);

  };

  handleInputChangeTeam = event => {
    const { value } = event;
    this.setState({
      teams: value
    });
    console.log(this.state.value);

  };
  handleFormSubmit = event => {
    console.log("submit form");
    event.preventDefault();
    this.notifyClick();
    console.log(this.state.username);

  };


  notifyClick = () =>{
    console.log("click"); 
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Usuario <b>/Yell</b> Actualizado.
        </div>
      ),
      level: "warning",
      position: "tr",
      autoDismiss: 15
    });   
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
                    <FormInputs onChange={this.handleInputChange}
                      ncols={["username col-md-5", "col-md-5"]}
                      proprieties={[
                        {
                          label: "Nombre de Usuario",
                          type: "text",
                          bsClass: "form-control",
                          value:this.state.username,
                          name:"username",
                          placeholder: "Nombre de Usuario",
                          onChange: this.handleInputChange,
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          onChange: this.handleInputChange,
                          value:this.state.email,
                          name:"email",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4"]}
                      proprieties={[
                        {
                          label: "Ciudad",
                          onChange: this.handleInputChange,
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          value:this.state.Ciudad,
                          name:"Ciudad",
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
                          bsClass: "form-control",
                          placeholder: "Steam",
                          value:this.state.Steam,
                          name:"Steam",
                        },                        {
                          label: "Usuario Twitch (Opcional)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Twitch",
                          value:this.state.twitch,
                          name:"twich",
                        },
                        
                      ]}
                    />
                    <Row>
                      <Col md={12}>
                      <div>
                          <ControlLabel>SELECCIONA LOS JUEGOS A ENCONTRAR EQUIPO</ControlLabel>
                          <Multiselect 
                            textField="name"
                            data={gamesOptions}
                            id="Juegos"
                            onChange={this.handleInputChangeTeam}
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
                  <img src={this.state.preview} alt="Preview" />

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
