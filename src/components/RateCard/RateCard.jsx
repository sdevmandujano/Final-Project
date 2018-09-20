import React, { Component } from "react";
import {
    Grid,
    Row,
    Badge
} from "react-bootstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";
import AddRating from "../../views/AddRating/AddRating";

export class RateCard extends Component {
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
                    Puntaje de Jugador: <br />
                     <Badge>4.5</Badge> de <Badge>5</Badge> <i class="fas fa-star"></i>
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