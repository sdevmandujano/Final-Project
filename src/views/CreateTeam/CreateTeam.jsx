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

class CreateTeam extends Component {
    render() {
        return (
<div className="content">
<Card
title="Crea Tu Equipo"
content={
    <form>
        <FormInputs
        properties={
            {
                label: "Nombre",
                type: "text",
                bsClass: "form-control",
                placeholder: "Los Destructores de Azeroth"
            }
        }
        />
        <FormGroup>
        <ControlLabel>Equipo</ControlLabel>
                <FormControl
                rows="2"
                componentClass="textarea"
                bsClass="form-control"
                placeholder="Propósito del Equipo"
                defaultValue="Mejorar en Raids"
                />
        </FormGroup>
        <FormInputs
        properties={
            {
                label: "Invitar Miembros",
                type: "text",
                bsClass: "form-control",
                placeholder: "Alfawarrior"
            }
        }
        />
        <Grid>
            <Row>
                <Col md={6}>
                <Button bsStyle="info" pullLeft fill type="submit">
                      Cancelar
                    </Button>
                </Col>

                <Col md={6}>
                <Button bsStyle="info" pullRight fill type="submit">
                      Crear
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

export default CreateTeam;