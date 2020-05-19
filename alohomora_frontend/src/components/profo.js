import axios from "axios";
import React, { Component } from "react";

import store from "../store";
import { getUserToken } from "../utils/authUtils";

class Profo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
    };
  }
  componentDidMount() {
    const token = getUserToken(store.getState());
    console.log(token);
    axios
      .get("http://localhost:8000/api/auth/user", {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
  }

  render() {
    if (this.state.loaded) {
      return <p>hello</p>;
    } else {
      return <p>Bye</p>;
    }
  }
}

export default Profo;
