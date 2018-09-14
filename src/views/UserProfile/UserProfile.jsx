import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";

import avatar from "../../assets/img/rodolfo.jpg";
import imagen from "../../assets/img/sidebarback.jpg";


class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edita tu Perfil"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-5"]}
                      proprieties={[
                        {
                          label: "Nombre de Usuario",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nombre de Usuario",
    
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4"]}
                      proprieties={[
                        {
                          label: "Ciudad",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                        }
                      ]}
                    />

                    <FormInputs
                      ncols={["col-md-4","col-md-4"]}
                      proprieties={[
                        {
                          label: "Usuario Steam (Opcional)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Steam",
                        },                        {
                          label: "Usuario Twitch (Opcional)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Twitch",
                        },
                        
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Acerca de Mi</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Soy el mejor gamer de la historia"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Actualizar
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage={imagen}
                avatar={avatar}
                name="Rodolfo Resines"
                userName="yellWashawasha"
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
                      <i className="fa fa-facebook-square" />
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
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
