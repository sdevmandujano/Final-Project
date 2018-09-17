import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import 'react-widgets/dist/css/react-widgets.css';

class AddRating extends Component {
    render() {
        return (
            <div className="content">
            <Card
            title="Califica al Jugador"
            content={
                <form>
                    <FormInputs
                    properties={
                        {
                            label: "Calificación del 1 al 5",
                            type: "number",
                            bsClass: "form-control",
                            placeholder: "Puntaje del 1 al 5"
                        }
                    }
                    />
        <FormGroup>
        <ControlLabel>Comentarios sobre el Jugador</ControlLabel>
                <FormControl
                rows="5"
                componentClass="textarea"
                bsClass="form-control"
                placeholder="Comenta sobre tu experiencia con este jugador"
                defaultValue="Buen teamate"
                />
        </FormGroup>
        <Grid>
            <Row>
                <Col md={6}>
                <Button bsStyle="info" pullLeft fill type="submit">
                      Cancelar
                    </Button>
                </Col>

                <Col md={6}>
                <Button bsStyle="info" pullRight fill type="submit">
                      Agregar Opinión
                </Button>
                </Col>
            </Row>
        </Grid>
                </form>
            }
            />
            </div>
        );
    }
}

export default AddRating