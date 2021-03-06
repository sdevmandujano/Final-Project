import React, { Component } from "react";
import API from '../../utils/API';

export class UserCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <a href="#">
              <img
                className="avatar border-gray"
                src={this.props.avatar}
                alt="..."
              />
              <h4 className="title">
                {this.props.name}
                <br />
                <small>{this.props.state}</small>
              </h4>
            </a>
          </div>
          <p className="description text-center">Steam id: {this.props.steam}</p>
          <p className="description text-center">Twitch id: {this.props.twitch}</p>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default UserCard;
