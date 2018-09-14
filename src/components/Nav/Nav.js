import React from "react";
import logo from '../Nav/yell-logo.png';
import icon from '../Nav/rodolfo.jpg';
import background from '../Nav/background.jpg';
import  './Nav.css';


const Nav = props => (

<div className="menu">
<nav className="navbar" style={ {backgroundImage: `url(${background})`}}>
    <img src={logo} id="yell-logo" alt="yell-logo"/>

    {/* <a href="#" id="open-nav" onClick={() => props.handlePageChange("open")} 
        className={props.currentNav === "open"}><i className="far fa-caret-square-right" id="fa-caret-square-right" data-toggle="tooltip" data-placement="top" title="Click to expand"/></a> */}

    <div className="options">
    
    <a href="#">
    <div className="menucategories">
    <div className="row">
    <div className="col">
    <i className="fas fa-gamepad" style={{color: 'red'}}/>
    </div>
    <div className="col">
    <h3>Games</h3>
    </div>
    </div>
    </div>
    </a>

    <div className="form-inline my-2 my-lg-0" id="search-bar">
    <input className="form-control mr-sm-2" type="search" placeholder="Search Game" aria-label="Search Game" />
    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </div>

    <a href="#">
    <div className="menufriends">
    <div className="row">
    <div className="col">
    <i className="fas fa-user-friends" style={{color: 'red'}}/>
    </div>
    <div className="col">
    <h3>Friends</h3>
    </div>
    </div>
    </div>
    </a>

    <a href="#">
    <div className="menuteams">
    <div className="row">
    <div className="col">
    <i className="fab fa-teamspeak" style={{color: 'red'}}/>
    </div>
    <div className="col">
    <h3>Teams</h3>
    </div>
    </div>
    </div>
    </a>

    <a href="#">
    <div className="menuinbox" data-toggle="tooltip" data-placement="bottom" title="Messages">
    <i className="far fa-envelope" />
    </div>
    </a>     
    
    <a href="#">
    <div className="menuaccount" data-toggle="tooltip" data-placement="bottom" title="My Account Settings">
    <img src={icon} alt="profile-pic" id="profile-icon" />
    <h3 className="profile-name">Alfawarrior</h3>
    </div>
    </a>

    </div>

</nav>
</div>
);

export default Nav;
