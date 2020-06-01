import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class PasswordResetDone extends Component {
  render() {
    return (
      <Header>
        An password reset email has been sent to your email. Please follow the
        link to reset your password.
      </Header>
    );
  }
}
