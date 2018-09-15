import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    Panel
} from "react-bootstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";
import avatar from "../../assets/img/rodolfo.jpg";
import 'react-widgets/dist/css/react-widgets.css';

export class TeamTable extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: true
        };
      }

    render() {
        return (
            <Panel id="mis-equipos" defaultExpanded>
            <Panel.Heading>
              <Panel.Title toggle>
                Mi Equipo
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
<Grid>
    <Row>
        <Col md={4}>
        <img src={avatar} alt="avatar" />
        </Col>

        <Col md={2}>
        Gamer Tag
        </Col>

        <Col md={2}>
        <Button simple>
        Calificar Jugador
        </Button>
        </Col>

        <Col md={2}>
        <Button simple>
        Chat
        </Button>
        </Col>

        <Col md={2}>
        <Button simple>
        Echar del Equipo
        </Button>
        </Col>
    </Row>
</Grid>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        );
    }
}