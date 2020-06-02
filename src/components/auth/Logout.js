import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import history from "../../utils/historyUtils";
class Logout extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.logoutUser();
    history.push("/");
  }

  render() {
    return <h2>Sorry to see you go...</h2>;
  }
}

export default connect(null, { logoutUser })(Logout);
