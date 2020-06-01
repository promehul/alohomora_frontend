import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class SignupDone extends Component {
  render() {
    return (
      <Header>
        Thanks for your registration, please follow the link sent to your
        provided email to activate your account.
      </Header>
    );
  }
}
