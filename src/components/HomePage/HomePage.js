import axios from "axios";
import React, { Component } from "react";
import "./HomePage.css";

import { Sidebar, Menu, Label, Loader } from "semantic-ui-react";

import { AlohomoraUrls } from "../../constants/urls";
import store from "../../store";
import { getUserToken } from "../../utils/authUtils";

import Question from "./Question";
import Header from "./Header";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      profileInfo: [],
      leaderboardVisible: false,
      loaded: false,
    };
  }

  componentDidMount() {
    const selfUserUrl = AlohomoraUrls.SELF_USER;
    const profileUrl = AlohomoraUrls.PROFILE;
    const token = getUserToken(store.getState());
    const headers = { authorization: "Token " + token };

    const reqToSelfUser = axios({
      method: "get",
      url: selfUserUrl,
      headers: headers,
    });

    const reqToProfile = axios({
      method: "get",
      url: profileUrl,
      headers: headers,
    });

    if (token) {
      axios
        .all([reqToSelfUser, reqToProfile])
        .then(
          axios.spread((selfUserRes, profileRes) => {
            this.setState({
              userInfo: selfUserRes.data,
              profileInfo: profileRes.data.results,
              loaded: true,
            });
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }

  toggleLeaderboard = () => {
    this.setState((prevstate) => ({
      leaderboardVisible: !prevstate.leaderboardVisible,
    }));
  };

  render() {
    if (this.state.loaded) {
      return (
        <React.Fragment>
          <Header
            toggleLeaderboard={this.toggleLeaderboard}
            leaderboardVisible={this.state.leaderboardVisible}
          />

          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible={this.state.leaderboardVisible}
            width="wide"
            direction="right"
            onHide={this.toggleLeaderboard}
            style={{ width: 260 }}
          >
            <Label size="medium" color="white">
              LeaderBoard
            </Label>
            {this.state.profileInfo.map((userprofile, index) => (
              <Menu.Item header>
                {index + 1}
                {". "}
                {userprofile.user.username}
                <Label>{userprofile.question_on}</Label>
              </Menu.Item>
            ))}
          </Sidebar>
          <Sidebar.Pusher className="question-center">
            <div>
              <Question question_on={this.state.userInfo.question_on} />
            </div>
          </Sidebar.Pusher>
        </React.Fragment>
      );
    } else {
      return <Loader active size="large" />;
    }
  }
}

export default HomePage;
