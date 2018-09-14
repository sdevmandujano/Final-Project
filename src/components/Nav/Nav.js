import React from "react";
import logo from '../../assets/img/yell-logo.png';
import icon from '../../assets/img/rodolfo.jpg';
import background from '../../assets/img/background.png';
import  './Nav.css';


const Nav = props => (

<nav class="navbar navbar-expand-lg text-light" style={ {backgroundImage: `url(${background})`}}>
 
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
      <a className="nav-link" href="#"><i class="fas fa-gamepad" style={{color: 'red'}}/>Juegos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i className="fab fa-teamspeak" style={{color: 'red'}}/>Equipos</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-user-friends" style={{color: 'red'}}/>Amigos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#"><i className="far fa-envelope" />Enviar mensaje</a>
          <a className="dropdown-item" href="#">Califica</a>
        </div>
      </li>
    </ul>
    <a className="navbar-brand m-auto" href="#">Alfawarrior<img className="p-1" src={icon} alt="profile-pic" id="profile-icon" /></a>
  </div>
</nav>

);

export default Nav;
