import React from 'react'
import { Container, Header, Grid, Image, Segment, Divider  } from 'semantic-ui-react'

const AuctionContainer= () => (
  <div>
    <Container fluid style={{ marginTop: '7em' }}>
       <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <p>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
            <p>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
            <p>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
            <p>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
            <p>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
          </Grid.Column>
        </Grid>
        <Divider vertical>And</Divider>
      </Segment>
      <Image src={'ROA_767x575.jpg'} size='medium' />
      <Header as='h2'>Meet Meghan Picerno and see her The Phantom of the Opera on Broadway!
      </Header>
      <Header as='h4'>New York, NY | February 29, 2020 @ 8:00PM EST
      </Header>
      <p>Join us for an exclusive meet & greet following a performance of Andrew Lloyd Webber’s The Phantom of the Opera! After the show ends, you and a guest will be invited to meet the current Christine Daaé and learn more about Broadway’s breathtaking original production. Don’t forget your camera!
      </p>
    </Container>
  </div>
)

export default AuctionContainer
