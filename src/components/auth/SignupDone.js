import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class SignupDone extends Component {
  render() {
    return (
      <Header>
        Thanks for your registration, Account activation has been made optional. 
        You can directly go to <Link to="/login">Login Page</Link> to proceed
        with the login.
      </Header>
    );
  }
}
