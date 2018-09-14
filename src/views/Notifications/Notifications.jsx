import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";

import Button from "../../components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Mensajes</h4>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Notifications;
