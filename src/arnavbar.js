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
        <Menu fixed='top' secondary style={{ marginBottom: '7em', backgroundColor: '#781d4f', textDecoration: 'underline'}}> 
          <Menu.Item as='a' header>
            <Image size='small' src='Logo_158x57.png' style={{ marginRight: '1.5em' }} />
          </Menu.Item>
          
          <Menu.Item style={{ color: '#FFFFFF' }}
            name="earn"
            active={activeItem === "earn"}
            onClick={this.handleItemClick}
          />
          <Menu.Item style={{ color: '#FFFFFF' }}
            name="redeem"
            active={activeItem === "redeem"}
            onClick={this.handleItemClick}
          />

          
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item style={{ color: '#FFFFFF' }}
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <Menu size='mini' fixed='top' secondary  style={{ marginTop: '6em' , maxWidth: '200em' , backgroundColor: '#781d4f' }}>

          <Menu.Item style={{ marginLeft: '30em' }}>
            <Image size='mini' src='cat-auctions.png' />
          </Menu.Item>
          <Menu.Item  style={{ color: '#FFFFFF' }}
            name='upcoming'
            active={activeItem === 'upcoming'}
            onClick={this.handleItemClick}
          />
          <Menu.Item style={{ color: '#FFFFFF' }}
            name='current'
            active={activeItem === 'current'}
            onClick={this.handleItemClick}
          />
          <Menu.Item style={{ color: '#FFFFFF' }}
            name='closed'
            active={activeItem === 'closed'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Dropdown item text='Sort By' style={{ color: '#FFFFFF' }}>
              <Dropdown.Menu>
                <Dropdown.Item>Ending Soonest</Dropdown.Item>
                <Dropdown.Item>Newly Listed</Dropdown.Item>
                <Dropdown.Item>Event Date</Dropdown.Item>
                 <Dropdown.Item>Show Points (low to high)</Dropdown.Item>
                <Dropdown.Item>Show Points (high to low)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
           <Menu.Item>
            <Image size='mini' src='cat-auctions.png' />
          </Menu.Item>
        </Menu>
      </React.Fragment>    
    );
  }
}