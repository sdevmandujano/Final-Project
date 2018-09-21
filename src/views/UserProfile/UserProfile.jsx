import React, { Component } from "react";
import NotificationSystem from "react-notification-system";
import DeleteBtn from "../../components/DeleteBtn";
import { style } from "../../variables/Variables.jsx";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import Combobox from 'react-widgets/lib/Combobox'
import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import { List, ListItem } from "../../components/List";
import Button from "../../components/CustomButton/CustomButton.jsx";
import 'react-widgets/dist/css/react-widgets.css';
import API from "../../utils/DatabaseRoutes";

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: [],
      gamesOptions:['orange', 'red', 'blue', 'purple'],
      preview: null,
      user:"",
      username: "",
      email: "",
      twitch: "",
      disabled: true,
      steam: "",
      prefGames: "",
      url: "",
      about: null,
      newUser: false,
      _notificationSystem: null
    }
  }
  componentDidMount() {
//this.props.email
    API.getUserId(this.props.email).then(res => {
      if (res.data){
       // If user is in database then load from DB
       this.setState({
        user:res.data._id
      });
        this.loadUser(res.data._id)
        this.loadGames();
      }
      else {
        //To set the email from FB when it is a new user
        //is not in dbs
        this.setState({
          newUser: true,
          email:this.props.email,
          url:"https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/" +Math.floor(Math.random()*20)+".png"
        });
        console.log(this.state.newUser)
      }
      
    });



  }


  loadUser = (id) => {
    API.getUser(id)
      .then(res => {
        this.setState({
          username: res.data[0].username,
          email: res.data[0].email,
          steam: res.data[0].steam,
          twitch: res.data[0].twitch,
          about: res.data[0].about,
          url: res.data[0].url,
          _notificationSystem: this.state.username
        });

      }
      )
      .catch(err => console.log(err));
  };

  loadGames = () => {
    console.log("Loading Games");
    API.getGames()
      .then(res => {
        console.log(res.data);
        this.setState({
          gamesOptions: res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  handleFormSubmit = event => {
    console.log("submit form");
    event.preventDefault();
    if (this.state.username && this.state.newUser) {
      API.saveUser({
      email: this.state.email,
      username: this.state.username,
      about: this.state.about,
      twitch: this.state.twitch,
      steam: this.state.steam,
      url:"https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/" +Math.floor(Math.random()*20)+".png",
      score: 0, 
    })
        .then(res => {
          this.setState({newUser: false });
          this.loadUser(res.data._id)
        })
        .catch(err => console.log(err));
    }




    this.notifyClick();

  };

  sendMessage(message) {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          {message
          }        </div>
      ),
      level: "warning",
      position: "tr",
      autoDismiss: 15
    });
  }
  notifyClick = () => {
    console.log("click");
    this.sendMessage("Usuario Actualizado");
  }
  handleFormSubmitFavorites = event => {
    event.preventDefault();
    let temp = this.state.favorite
    temp.push(this.state.prefGames)
    this.setState({
      favorite: temp
    });
    API.saveFavorite(this.state.prefGames.name,this.state.user)
      .then(res => console.log(res))
       .catch(err => console.log(err));
  };

  render() {

    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
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
                          value: this.state.username,
                          name: "username",
                          placeholder: "Nombre de Usuario",
                          onChange: this.handleInputChange,

                        },
                        {
                          label: "Email",
                          type: "email",
                          placeholder: "Email",
                          onChange: this.handleInputChange,
                          value: this.state.email,
                          name: "email",
                          disabled: true
                        }
                      ]}
                    />

                    <FormInputs
                      ncols={["col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Usuario Steam (Opcional)",
                          onChange: this.handleInputChange,
                          type: "text",
                          placeholder: "Steam",
                          value: this.state.Steam,
                          name: "steam",

                        },
                        {
                          label: "Usuario Twitch (Opcional)",
                          type: "text",
                          placeholder: "Twitch",
                          onChange: this.handleInputChange,
                          value: this.state.twitch,
                          name: "twitch",

                        }

                      ]}
                    />
                    <Row>
                      <Col md={12}>
                      <ControlLabel>SELECCIONA LOS JUEGOS PARA LOS QUE BUSCAS  ENCONTRAR EQUIPO</ControlLabel>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                          <Combobox
                            textField="name"
                            data={this.state.gamesOptions}
                            value={this.state.prefGames}
                            onChange={value => this.setState({ prefGames: value })}
                          />
                      </Col>
                      <Col md={2}>
                          <Button
                          bsStyle="success"
                          onClick={this.handleFormSubmitFavorites}
                          fill disabled={this.state.newUser}
                          >
                            Agregar
                          </Button>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup>
                          <ControlLabel>Acerca de Mi</ControlLabel>
                          <FormControl
                            rows="5"
                            value={this.state.about}
                            onChange= {this.handleInputChange}
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="danger" onClick={this.handleFormSubmit} pullRight fill>
                      Actualizar
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
            <Row>
              <Col>
              <Card
                title="Avatar"
                content={
                  <img src={this.state.url} style={{width: "80%"}}/>
                }
              />
              </Col>
            </Row>
            <Row>
              <Col>
              <Card
                title="Buscando equipo en: "
                content={
                  <Row>
                      <Col md={12}>
                      {this.state.favorite.length ? (
                        <List>
                          {this.state.favorite.map(game => (
                            <ListItem key={game._id}>
                                <strong>
                                  {game.name}
                                </strong>
                              <DeleteBtn onClick={() => this.deleteFavorite(game._id)} />
                            </ListItem>
                          ))}
                        </List>
                      ) : (
                        <h5>No hay favoritos</h5>
                      )}
                      </Col>
                    </Row>
                }
              />
              </Col>
            </Row>


          </Col>
  
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
