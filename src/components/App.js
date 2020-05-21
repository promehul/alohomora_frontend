import React, { Component } from "react";
import { Notifs } from "redux-notifications";
import MainContent from "./MainContent";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Notifs />
        <MainContent />
      </div>
    );
  }
}
