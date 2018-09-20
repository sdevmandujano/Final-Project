import React, { Component } from "react";
import { RateCard } from "../../components/RateCard/RateCard";
import { CommentsPanel } from "../../components/CommentsPanel/CommentsPanel";
import {
    Grid,
    Row,
    Col
  } from "react-bootstrap";
import { Card } from "../../components/Card/Card.jsx";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import avatar from "../../assets/img/rodolfo.jpg";
import imagen from "../../assets/img/sidebarback.jpg";
import 'react-widgets/dist/css/react-widgets.css';

class RatePage extends Component {
    render() {
        return (
<div className="content">
<Grid fluid>
<Row>
    <Col md={6}>
    <Card
    title="Calificación"
    content={
        <RateCard />
    }
    />
    </Col>

    <Col md={6}>
    <UserCard
                bgImage={imagen}
                avatar={avatar}
                name="Rodolfo Resines"
                userName="Alfawarrior"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
    </Col>
</Row>

  <Card
  title="Opiniones"
  content={
<CommentsPanel />
  }
/>

</Grid>
</div>
        );
    }
}

export default RatePage;