import React, { Component } from "react";
import {
    Grid,
    Row,
    Badge
} from "react-bootstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";
import AddRating from "../../views/AddRating/AddRating";
import API from "../../utils/DatabaseRoutes";

export class RateCard extends Component {
    constructor(props) {
        super(props)
        this.status = {
            scoreArray: []
        }

      }

      componentDidMount() {
        
      }
    
      showBadges() {
        let temp = [];
        for (let i = 0 ; i< this.props.score ;i ++){
           temp.push("d");
        }
        this.setState({scoreArray: temp});
      }
    
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
                    Puntaje Promedio: <br />
                     <Badge>{this.props.score}</Badge> de <Badge>5</Badge>
                </h1>
            </Row>
            <Row>
                <h2>
                    {this.props.comments.length} Opiniones
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