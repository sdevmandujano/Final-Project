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