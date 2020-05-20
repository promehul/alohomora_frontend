import axios from "axios";
import React, { Component } from "react";
import "./HomePage.css";

import {Sidebar, Menu, Segment, Icon, Button, Header, Image, Loader} from "semantic-ui-react"

import { AlohomoraUrls } from "../../constants/urls";
import store from "../../store";
import { getUserToken } from "../../utils/authUtils";

import Question from "./Question"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      loaded: false,
    };
  }

  componentDidMount(){
    const selfUserUrl = AlohomoraUrls.SELF_USER;
    const token = getUserToken(store.getState());
    const headers = { authorization: "Token " + token };

    const reqToSelfUser = axios({
      method: "get",
      url: selfUserUrl,
      headers: headers,
    });
    
    if (token) {
      axios
        .all([reqToSelfUser])
        .then(
          axios.spread((profileRes) => {
            this.setState({
              userInfo: profileRes.data,
              loaded: true,
            });
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }
  

  render() {
    if (this.state.loaded) {
      return (
        <React.Fragment>
          <div className="question-center">
          <Question question_on={this.state.userInfo.question_on}/>
          </div>
        </React.Fragment>
      );
    } else {
      return <Loader active size="large" />;
    }
  }
}

export default HomePage;
