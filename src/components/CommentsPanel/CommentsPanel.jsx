import React, { Component } from "react";
import {
    Panel,
    Badge
} from "react-bootstrap";

export class CommentsPanel extends Component {
    render() {
        return (
            <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Rodolfo opinó <Badge>5</Badge></Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
            </Panel.Body>
          </Panel>
        );
    }
}