import axios from "axios";
import React, { Component } from "react";

import {
  Image,
  Container,
  Input,
  Button,
  Segment,
  Loader,
} from "semantic-ui-react";

import { AlohomoraUrls } from "../../constants/urls";
import store from "../../store";
import { getUserToken } from "../../utils/authUtils";
import history from "../../utils/historyUtils";

import { actions as notifActions } from "redux-notifications";

import "./Question.css";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionInfo: {},
      answer: "",
      loaded: false,
    };
  }

  componentDidMount() {
    const { question_on } = this.props;

    const questionUrl = AlohomoraUrls.QUESTION + question_on.toString();
    const token = getUserToken(store.getState());
    const headers = { authorization: "Token " + token };

    const reqToGetQuestion = axios({
      method: "get",
      url: questionUrl,
      headers: headers,
    });

    if (token) {
      axios
        .all([reqToGetQuestion])
        .then(
          axios.spread((questionRes) => {
            this.setState({
              questionInfo: questionRes.data,
              loaded: true,
            });
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }

  answerChangeHandle = (e) => {
    this.setState({
      answer: e.target.value,
    });
  };

  checkAnswer = () => {
    const checkAnswerUrl = AlohomoraUrls.CHECK_ANSWER;
    const token = getUserToken(store.getState());
    const headers = { authorization: "Token " + token };

    const { notifSend } = notifActions;

    var formData = new FormData();
    formData.append("answer", this.state.answer);

    this.setState({
      answer: "",
    });

    if (token) {
      axios({
        method: "post",
        url: checkAnswerUrl,
        data: formData,
        headers: headers,
      })
        .then((response) => {
          if (response.data === "Correct") {
            store.dispatch(
              notifSend({
                message: "Congratulations! Your answer was Right !",
                kind: "success",
                dismissAfter: 4000,
              })
            );
            history.push("/");
          } else {
            store.dispatch(
              notifSend({
                message: "The Answer was incorrect",
                kind: "warning",
                dismissAfter: 2000,
              })
            );
          }
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.checkAnswer();
    }
  };

  render() {
    if (this.state.loaded) {
      return (
        <Container textAlign="center" text>
          {this.state.questionInfo.image !== null && (
            <Image centered src={this.state.questionInfo.image} size="medium" />
          )}
          {this.state.questionInfo.question_text !== "" && (
            <Segment size="large" textAlign="center">
              {this.state.questionInfo.question_text}
            </Segment>
          )}
          <Input
            focus
            placeholder="Answer here.."
            size="small"
            className="answer-input"
            onChange={this.answerChangeHandle}
            onKeyPress={this.handleKeyPress}
            value={this.state.answer}
          />
          <Button positive onClick={this.checkAnswer}>
            Check Answer
          </Button>
        </Container>
      );
    } else {
      return (
        <Loader active size="medium">
          Question Coming...
        </Loader>
      );
    }
  }
}

export default Question;
