import React from "react";
import shotzzy from "../GamePage/shotzzy.jpg"
import bubu from "../GamePage/bubudubu.jpg";
import frosty from "../GamePage/frosty.png";
import snipedown from "../GamePage/snipedown.jpeg";
import player from "../GamePage/rodolfo.jpg";
import { NavLink } from "react-router-dom";

const GamePage = () => (
<div className="game-page">
    <h3>Top Players:</h3>
    <hr className="hr-game"/>

<section className="row" id="top-players">

<div className="card">
  <img className="card-img-top" src={shotzzy} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Shotzzy</h5>
    <p className="card-text">Number one player of Halo 5</p>
    <NavLink href="/" className="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={bubu} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Bubu Dubu</h5>
    <p className="card-text">Number two player of Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={frosty} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Frosty</h5>
    <p className="card-text">Number three player of Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={snipedown} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Best Sniper in Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

</section>

<h3>All Players:</h3>
<hr className="hr-game"/>

<section className="row" id="all-players">

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

<div className="card">
  <img className="card-img-top" src={player} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Snipedown</h5>
    <p className="card-text">Average player from Halo 5</p>
    <NavLink href="#" class="btn btn-primary">Start Chat</NavLink>
  </div>
</div>

</section>

</div>
);

export default GamePage;