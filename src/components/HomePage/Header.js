import React, { Component } from "react";
import { Menu, Modal, Image, Button } from "semantic-ui-react";
import history from "../../utils/historyUtils";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleItemClick = (e, { name }) => {
    if (name == "logout") {
      history.push("/logout");
    }

    if (name == "instructions") {
      this.setState({
        modalOpen: true,
      });
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
          <Menu.Item name="logout" onClick={this.handleItemClick}>
            Log Out
          </Menu.Item>

          <Menu.Item name="instructions" onClick={this.handleItemClick}>
            Instructions
          </Menu.Item>
        </Menu>
        <Modal
          open={this.state.modalOpen}
          size="mini"
          onClose={this.closeModal}
          closeIcon={true}
        >
          <Modal.Header>Instructions</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p>Welcome to Alohomora.</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Header;
