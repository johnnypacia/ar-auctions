import React, { Component } from "react";
import { Input,
		 Image, 
		 Menu } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed='top' secondary style={{ marginBottom: '7em' }}> 
        <Menu.Item as='a' header>
          <Image size='small' src='Logo_158x57.png' style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item 
          name="earn"
          active={activeItem === "earn"}
          onClick={this.handleItemClick}
          />
          <Menu.Item
          name="redeem"
          active={activeItem === "redeem"}
          onClick={this.handleItemClick}
       		 />
        </Menu.Menu>


        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}