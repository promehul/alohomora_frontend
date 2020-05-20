import axios from "axios";
import React, { Component } from "react";

import { Image, Container, Label, Input, Button, Divider, Segment } from "semantic-ui-react";

import { AlohomoraUrls } from "../../constants/urls";
import store from "../../store";
import { getUserToken } from "../../utils/authUtils";

import "./Question.css"

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionInfo: {},
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
            });
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <Container textAlign="center" text >
        {this.state.questionInfo.image !== null && (
          <Image
            centered
            src={this.state.questionInfo.image}
            size="medium"
          ></Image>
        )}
        {this.state.questionInfo.question_text !== "" && (
          <Segment size="large" textAlign='center'>{this.state.questionInfo.question_text}</Segment>
          
        )}
        <Input focus placeholder="Answer here.." size="small" className="answer-input"/> 
        <Button positive >Check Answer</Button> 
      </Container>
    );
  }
}

export default Question;
