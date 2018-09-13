import React, { Children } from "react";
import sidenav from '../Nav/hexabump_@2X.png';
import halo from '../Nav/halo5.jpg';
import fortnite from '../Nav/fortnite.png';
import lol from '../Nav/lol.png';
import overwatch from '../Nav/overwatch.jpg';
import pubg from '../Nav/pubg.jpg';

const openedNav = props => (
 <nav className="openedNav" style={ {backgroundImage: `url(${sidenav})`, color: 'red', fontSize: '20px'}}>
        
        <a href="#" id="close-nav" onClick={() => props.handlePageChange("closed")} 
        className={props.currentNav === "closed"}><i className="far fa-caret-square-left" /></a>

        <hr className="hr-nav" />
        <i className="fas fa-heart" data-toggle="tooltip" data-placement="top" title="My Games"/>
        <hr className="hr-nav" />

        <div className="my-games-menu">
        
        <img src={halo} alt="my games" id="my-games" data-toggle="tooltip" data-placement="top" title="Halo 5"/>

        <img src={fortnite} alt="my games" id="my-games"data-toggle="tooltip" data-placement="top" title="Fortnite"/>

        <img src={lol} alt="my games" id="my-games" data-toggle="tooltip" data-placement="top" title="League of Legends"/>

        <img src={overwatch} alt="my games" id="my-games" data-toggle="tooltip" data-placement="top" title="Overwatch"/>

        <img src={pubg} alt="my games" id="my-games" data-toggle="tooltip" data-placement="top" title="Player Unknown Battlegrounds"/>
        </div>

</nav>
);

export default openedNav;