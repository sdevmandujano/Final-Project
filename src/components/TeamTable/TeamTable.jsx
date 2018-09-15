import React, { Component } from "react";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import avatar from "../../assets/img/rodolfo.jpg";

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
        <Col>
        <img src={avatar} alt="avatar" />
        </Col>

        <Col>
        Gamer Tag
        </Col>

        <Col>
        <Button simple>
        Calificar Jugador
        </Button>
        </Col>

        <Col>
        <Button simple>
        Chat
        </Button>
        </Col>

        <Col>
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