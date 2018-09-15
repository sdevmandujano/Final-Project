import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM, {render} from 'react-dom';
import icon from '../../assets/img/rodolfo.jpg';
import background from '../../assets/img/background.png';
import  './Nav.css';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


  class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: window.innerWidth
      };
    }

    state = {
      isOpen: false
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " open" : ""}`;

    return (

<nav className="navbar navbar-expand-lg text-light" style={ {backgroundImage: `url(${background})`}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Buscar Juego" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <a className="nav-link" href="#"><i className="fas fa-gamepad" style={{color: 'red'}}/>Juegos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i className="fab fa-teamspeak" style={{color: 'red'}}/>Equipos</a>
      </li>
      <li className="nav-item">
      <NavDropdown eventKey={3} title=" Amigos" className="fab fa-teamspeak pt-4" id="navbarDropdown">
          <MenuItem eventKey={3.1}>Enviar Mensaje</MenuItem>
          <MenuItem eventKey={3.2}>Califica</MenuItem>
        </NavDropdown>
        </li>
    </ul>
    <a className="navbar-brand m-auto" href="#">Alfawarrior</a><img className="p-1" src={icon} alt="profile-pic" id="profile-icon" />
  </div>
</nav>
);
  }
}

export default Nav;
