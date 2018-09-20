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

class AddRating extends Component {
    render() {
        let gamesOptions = ['orange', 'red', 'blue', 'purple'];
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
                          <Multiselect textField="name" data={gamesOptions}/>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                      <div controlId="formControlsCombo">
                          <ControlLabel>Calificación del 1 (muy malo) al 5 (excelente)</ControlLabel>
                          <Combobox textField="rating" data={playerRating}/>
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
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
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