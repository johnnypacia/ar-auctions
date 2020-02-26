import React from 'react'
import { Container, Segment, Item, Divider } from 'semantic-ui-react'

const AuctionContainer= () => (
  <div>
    <Container fluid style={{ marginTop: '7em' }}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='medium' src='ROA_767x575.jpg' />

            <Item.Content>
              <Item.Header as='a'>Meet Meghan Picerno and see her The Phantom of the Opera on Broadway!</Item.Header>
              <Item.Description><a href="www.github.com/johnnypacia">3 Packages Avaiable Starting at 1000 ShowPoints</a></Item.Description>
              <Item.Meta>New York, NY | February 29, 2020 @ 8:00PM EST</Item.Meta>
              <Item.Extra><p>Join us for an exclusive meet & greet following a performance of Andrew Lloyd Webber’s The Phantom of the Opera! After the show ends, you and a guest will be invited to meet the current Christine Daaé and learn more about Broadway’s breathtaking original production. Don’t forget your camera!</p></Item.Extra>
            </Item.Content>
          </Item>
          <Divider />
          <Item>
            <Item.Image size='medium' src='ROA_767x575.jpg' />

            <Item.Content>
              <Item.Header as='a'>Meet Meghan Picerno and see her The Phantom of the Opera on Broadway!</Item.Header>
              <Item.Meta>New York, NY | February 29, 2020 @ 8:00PM EST</Item.Meta>
              <Item.Description>
                <p>Join us for an exclusive meet & greet following a performance of Andrew Lloyd Webber’s The Phantom of the Opera! After the show ends, you and a guest will be invited to meet the current Christine Daaé and learn more about Broadway’s breathtaking original production. Don’t forget your camera!</p>
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
          <Divider />
        </Item.Group>
      </Segment>
      

    </Container>
  </div>
)

export default AuctionContainer
