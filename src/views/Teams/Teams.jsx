import React, { Component } from "react";
import { TeamTable } from "../../components/TeamTable/TeamTable.jsx";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";

class Teams extends Component {
    render() {
        return (
<div className="content">
<Grid fluid>
        <Row>
            <Col>
                <Button bsStyle="info" pullRight fill type="submit">
                    Crear Equipo
                </Button>
            </Col>
        </Row>

    <Row>   
        <Col>
            <TeamTable />
         </Col>
    </Row>
</Grid>
</div>
        );
    }
}

export default Teams;