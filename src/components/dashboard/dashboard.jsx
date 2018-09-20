import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class SearchResultContainer extends Component {
  state = {
    data: null,
    top: []
  };

  
  componentDidMount() {
    this.searchGiphy();
    this.searchTop();
  }

  searchGiphy = () => {
    axios
      .get(
        "https://api.twitch.tv/kraken/clips/top?limit=1&game=Fortnite&trending=true",
        {
          headers: {
            "Client-ID": "4sq1xbwvhlr0nn95o51t91c0pfmajm",
            Accept: "application/vnd.twitchtv.v5+json"
          }
        }
      )
      .then(result => {
        console.log(result);
        this.setState({ data: result.data.clips[0] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchTop = () => {
    axios
      .get("https://api.twitch.tv/kraken/games/top", {
        headers: {
          "Client-ID": "4sq1xbwvhlr0nn95o51t91c0pfmajm",
          Accept: "application/vnd.twitchtv.v5+json"
        }
      })
      .then(result => {
        console.log(result);
        this.setState({ top: result.data.top });
      })
      .catch(error => {
        console.log("ERROR BAJANDO EL TOP");
        console.log(error);
      });
  };