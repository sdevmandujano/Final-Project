import React from "react";
import sidenav from '../Nav/hexabump_@2X.png';
import halo from '../Nav/halo5.jpg';
import fortnite from '../Nav/fortnite.png';
import lol from '../Nav/lol.png';
import overwatch from '../Nav/overwatch.jpg';
import pubg from '../Nav/pubg.jpg';

const closedNav = props => (
 <nav className="sideNav" style={ {backgroundImage: `url(${sidenav})`, color: 'red', fontSize: '20px'}}>

        <a href="#" onClick={() => props.handlePageChange("open")} 
        className={props.currentNav === "open"}><i className="far fa-caret-square-right" /></a>

        <hr className="hr-nav"/>
        <i className="fas fa-heart" data-toggle="tooltip" data-placement="top" title="My Games"/>
        <hr className="hr-nav"/>

        <div className="my-games-menu">
        
        <img src={halo} alt="my games" className="my-games" data-toggle="tooltip" data-placement="top" title="Halo 5"/>

        <img src={fortnite} alt="my games" className="my-games"data-toggle="tooltip" data-placement="top" title="Fortnite"/>

        <img src={lol} alt="my games" className="my-games" data-toggle="tooltip" data-placement="top" title="League of Legends"/>

        <img src={overwatch} alt="my games" className="my-games" data-toggle="tooltip" data-placement="top" title="Overwatch"/>

        <img src={pubg} alt="my games" className="my-games" data-toggle="tooltip" data-placement="top" title="Player Unknown Battlegrounds"/>
        </div>

</nav>
);

export default closedNav;