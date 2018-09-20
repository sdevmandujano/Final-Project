import React, { Component } from "react";
import { TeamTable } from "../../components/TeamTable/TeamTable.jsx";
import {
    Grid,
    Row
} from "react-bootstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";

class Teams extends Component {
    render() {
        return (
<div className="content">
<Grid fluid>
<Row>
<Button bsStyle="info" pullRight fill type="submit">
            Crear Equipo
</Button>

<TeamTable />
</Row>
</Grid>
</div>
        );
    }
}

export default Teams;