import React, { Component } from "react";
import { Input,
		 Image, 
		 Menu, 
     Dropdown 
     } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Menu fixed='top' secondary style={{ marginBottom: '7em', backgroundColor: '#781d4f' }}> 
          <Menu.Item as='a' header>
            <Image size='small' src='Logo_158x57.png' style={{ marginRight: '1.5em' }} />
          </Menu.Item>
          
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
        <Menu size='mini' fixed='top' secondary  style={{ marginTop: '6em' ,  backgroundColor: '#781d4f' }}>
          <Menu.Item size='medium' src='cat-auctions.png' />
          <Menu.Item style={{ marginLeft: '30%'}}
            name='upcoming'
            active={activeItem === 'upcoming'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='current'
            active={activeItem === 'current'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='closed'
            active={activeItem === 'closed'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right' style={{ marginRight: '40%'}}>
            <Dropdown item text='sort by'>
              <Dropdown.Menu>
                <Dropdown.Item>Ending Soonest</Dropdown.Item>
                <Dropdown.Item>Newly Listed</Dropdown.Item>
                <Dropdown.Item>Event Date</Dropdown.Item>
                 <Dropdown.Item>Show Points (low to high)</Dropdown.Item>
                <Dropdown.Item>Show Points (high to low)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </React.Fragment>    
    );
  }
}