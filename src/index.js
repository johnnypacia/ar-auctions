import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container, Header } from 'semantic-ui-react';
import ARnavbar from "./arnavbar";
import AuctionContainer from "./auctioncontainer";


const App = ({ children }) => (
  <Container style={{ margin: 20 }}>

    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <ARnavbar />
    <AuctionContainer />
  </App>,
  document.getElementById("root")
);