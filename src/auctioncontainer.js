import React from 'react'
import { Container, Segment, Item, Divider } from 'semantic-ui-react'

const AuctionContainer= () => (
  <div>
    <Container fluid style={{ marginTop: '7em' }}>
      <Segment style={{ paddingTop: '100px'}}>
        <Item.Group>
          <Item>
            <Item.Image size='medium' src='bowlroom.jpg' />

            <Item.Content>
              <Item.Header as='a'>See  WICKED and hit the bowling lanes with some of the cast!</Item.Header>
              <Item.Description><a href="www.github.com/johnnypacia">3 Packages Avaiable Starting at 1000 ShowPoints</a></Item.Description>
              <Item.Meta>New York, NY | March 29, 2020 @ 3:00PM EST</Item.Meta>
              <Item.Extra><p>Let's go down to the Ozdust BOWLroom! Join an exclusive group of Audience Rewards members at the matinee of WICKED on 3/29, followed by bowling, food, and drinks with a group of WICKED cast members (and WICKED representatives in the Broadway Bowling League!)</p></Item.Extra>
            </Item.Content>
          </Item>
          <Divider />
          <Item>
            <Item.Image size='medium' src='MG.jpg' />

            <Item.Content>
              <Item.Header as='a'>Meet <em>Mean Girls</em> star Reneé Rapp and see the show!</Item.Header>
              <Item.Description><a href="www.github.com/johnnypacia">3 Packages Avaiable Starting at 1000 ShowPoints</a></Item.Description>
              <Item.Meta>New York, NY | March 19, 2020 @ 7:00PM EST</Item.Meta>
              <Item.Extra><p>Don't miss your chance to meet Broadway's new Queen Bee! Bid now for an exclusive meet-and-greet with Reneé Rapp, star of Tina Fey's Mean Girls. Plus, you and your guest will get to see the show from great Orchestra seats!</p></Item.Extra>
            </Item.Content>
          </Item>
          <Divider />
          <Item>
            <Item.Image size='medium' src='ROA_767x575.jpg' />

            <Item.Content>
              <Item.Header as='a'>Get a Behind-the-Scenes Experience and see <em>Rock of Ages</em></Item.Header>
              <Item.Description><a href="www.github.com/johnnypacia">3 Packages Avaiable Starting at 1000 ShowPoints</a></Item.Description>
              <Item.Meta>New York, NY | March 5, 2020 @ 5:30PM EST</Item.Meta>
              <Item.Extra><p>Win two tickets to Rock of Ages and you and your guest will get a rock makeover from some of the cast with the help of the hair/wardrobe/makeup department. Afterwards, learn some steps from the show choreography for "Don’t Stop Believin’" with the dance captain and rehearse the music with the music director. Then, you'll get to see the cast in action on stage from great Orchestra seats at the 8pm peformance!</p></Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      

    </Container>
  </div>
)

export default AuctionContainer
