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
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import 'react-widgets/dist/css/react-widgets.css';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: null,
      isOpen: false ,
        score: 0,
        topScore: 0,
        guessed:"",
        message: "Click an image to begin!",
        frie:"",
        _notificationSystem: null

      }
  }
  
  sendToStorage = () =>{
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
      position: "bc",
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
                    <FormInputs
                      ncols={["username col-md-5", "col-md-5"]}
                      proprieties={[
                        {
                          label: "Nombre de Usuario",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nombre de Usuario",
    
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4"]}
                      proprieties={[
                        {
                          label: "Ciudad",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                        }
                      ]}
                    />

                    <FormInputs
                      ncols={["col-md-4","col-md-4"]}
                      proprieties={[
                        {
                          label: "Usuario Steam (Opcional)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Steam",
                        },                        {
                          label: "Usuario Twitch (Opcional)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Twitch",
                        },
                        
                      ]}
                    />
                    <Row>
                      <Col md={12}>
                      <div controlId="formControlsCombo">
                          <ControlLabel>SELECCIONA LOS JUEGOS A ENCONTRAR EQUIPO</ControlLabel>
                          <Multiselect textField="name" data={gamesOptions}/>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
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
                    <Button bsStyle="danger" onClick={this.sendToStorage} pullRight fill>
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
