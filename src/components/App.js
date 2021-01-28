import styled from "styled-components";
import ShortenUrl from "./ShortenUrl";

import Background from "./Background";
import Content from "./Content";

const Background2 = styled(Background)`
  animation-direction: alternate-reverse;
  animation-duration: 4s;
`;

const Background3 = styled(Background)`
  animation-duration: 5s;
`;

function App() {
  return (
    <div className="App">
      <Background />
      <Background2 />
      <Background3 />
      <Content>
        <header>
          <h2>&#128476; Short Urls</h2>
          <h4>Shorten your links...</h4>
        </header>
        <main>
          <ShortenUrl></ShortenUrl>
        </main>
      </Content>
    </div>
  );
}

export default App;
