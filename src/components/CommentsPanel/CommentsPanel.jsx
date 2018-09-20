import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { Panel } from "react-bootstrap";

export class CommentsPanel extends Component {
    render() {
        return (
            <div>
            <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Rodolfo opinó <Badge>5</Badge></Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
            </Panel.Body>
          </Panel>
            </div>
        );
    }
}