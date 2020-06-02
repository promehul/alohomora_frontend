import React, { Component } from "react";
import { Menu, Modal } from "semantic-ui-react";
import history from "../../utils/historyUtils";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleItemClick = (e, { name }) => {
    if (name === "logout") {
      history.push("/logout");
    }

    if (name === "instructions") {
      this.setState({
        modalOpen: true,
      });
    }

    if (name === "leaderboard") {
      this.props.toggleLeaderboard();
    }
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item name="leaderboard" onClick={this.handleItemClick}>
            Show Leaderboard
          </Menu.Item>
          <Menu.Item name="instructions" onClick={this.handleItemClick}>
            Instructions
          </Menu.Item>
          <Menu.Item name="logout" onClick={this.handleItemClick}>
            Log Out
          </Menu.Item>
        </Menu>
        <Modal
          open={this.state.modalOpen}
          size="mini"
          onClose={this.closeModal}
          closeIcon={{
            style: { top: "1.0535rem", right: "1rem" },
            color: "black",
            name: "close",
          }}
          className="modal"
        >
          <Modal.Header>Instructions</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <h5>Welcome to Alohomora.</h5>
              <hr />
              <p>
                All answers should be in small caps. If the answer comprises of
                2 words and there is space between them, that space should be
                omitted. If the answer contains numbers then they should be
                written in alphabtetical form.
              </p>
              <p>
                Suppose the answer is <b>Area 51</b>, then it would be written
                like <b>areafiveone</b>.
              </p>
              <hr />
              <p>
                Created with{" "}
                <span role="img" aria-label="heart">
                  &#128147;
                </span>{" "}
                by <b>promehul</b> & <b>hrishikeshaj</b>
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Header;
