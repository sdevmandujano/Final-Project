import React, { Component } from "react";
import {
    Grid,
    Row,
    Badge
} from "react-bootstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";

export class RateCard extends Component {
    render() {
        return (
            <Grid fluid>
            <Row>
                <h1>
                    Puntaje de Jugador: <Badge>4.5</Badge> de <Badge>5</Badge> <i class="fas fa-star"></i>
                </h1>
            </Row>
            <Row>
                <h1>
                    120 Opiniones
                </h1>
                <Button bsStyle="info" pullRight fill type="submit">
                      Opinar
                </Button>
            </Row>
            </Grid>
        );
    }
}