import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Button from "../../components/CustomButton/CustomButton.jsx";
import { Card } from "../../components/Card/Card.jsx";
import 'react-widgets/dist/css/react-widgets.css';

export class TeamTable extends Component {

    render() {
        return (
          <Card
          title= "Equipo"
          content={
<Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre de Jugador</th>
      <th>Puntaje</th>
      <th>Mensajes</th>
      <th>Abandonar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alfawarrior</td>
      <td>
      <Button bsStyle="info">
      Calificar
      </Button>
      </td>
      <td>
      <Button bsStyle="info">
      Chat
      </Button>
      </td>
      <td>
      <Button bsStyle="info">
      Quitar
      </Button>
      </td>
    </tr>
    <tr>
    <td>2</td>
      <td>Shotzzy</td>
      <td>
      <Button bsStyle="info">
      Calificar
      </Button>
      </td>
      <td>
      <Button bsStyle="info">
      Chat
      </Button>
      </td>
      <td>
      <Button bsStyle="info">
      Quitar
      </Button>
      </td>
    </tr>
    <tr>
    <td>3</td>
      <td>SamJack</td>
      <td>
      <Button bsStyle="info">
      Calificar
      </Button>
      </td>
      <td>
      <Button bsStyle="info">
      Chat
      </Button>
      </td>
      <td>
      <Button bsStyle="info">
      Quitar
      </Button>
      </td>
    </tr>
  </tbody>
</Table>
          }
          />
        );
    }
}