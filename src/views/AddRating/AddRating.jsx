import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import Multiselect from 'react-widgets/lib/Multiselect';
import Combobox from 'react-widgets/lib/Combobox';
import { Card } from "../../components/Card/Card.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import 'react-widgets/dist/css/react-widgets.css';
import API from "../../utils/DatabaseRoutes";

class AddRating extends Component {
  state = {
    gameName: "",
    score: "",
    comments: ""
  }

  handleInputChange = event => {
    let value = event.target.value;
    let name = <event className="target name">;</event>

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.notifyClick();

    this.setState({
      gameName: "",
      score: "",
      comments: ""
    });
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
      this.sendMessage("Opinión Actualizada");
    }

    render() {
        let gamesOptions = ["Fortnite", "PUBG", "League of Legends", "DOTA 2", "World of Warcraft", "Halo 5", "Worlf of Warcraft", "Destiny 2", "Call of Duty", "Super Smash Bros"];
        let playerRating = [1, 2, 3, 4, 5];
        return (
            <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Escribe una opinión"
                content={
                  <form>
                    <Row>
                      <Col md={12}>
                      <div controlId="formControlsCombo">
                          <ControlLabel>Selecciona el / los juegos</ControlLabel>
                          <Multiselect textField="name" 
                          data={gamesOptions} 
                          value={this.state.gameName}
                          name="gameName"
                          onChange={this.handleInputChange}
                          type="text"/>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                      <div controlId="formControlsCombo">
                          <ControlLabel>Calificación del 1 (muy malo) al 5 (excelente)</ControlLabel>
                          <Combobox textField="rating" 
                          data={playerRating}
                          value={this.state.score}
                          name="score"
                          onChange={this.handleInputChange}
                          type="number"/>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Comentarios</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Describe al jugador"
                            defaultValue="Excelente para jugar en equipo"
                            value={this.state.comments}
                            onChange={this.handleInputChange}
                            name="comments"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.handleFormSubmit}>
                      Agregar
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
            </div>
        );
    }
}

export default AddRating;