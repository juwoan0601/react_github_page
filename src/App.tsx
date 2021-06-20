import React from 'react';
import logo from './beans_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GMOBEAN's Personal Page on DEV! Welcome Scookers!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://create-react-app.dev/docs/adding-typescript/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Run create-react-app with Typescript
        </a>
        <a
          className="App-link"
          href="https://velog.io/@byjihye/react-github-pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy React Project by Github pages
        </a>
      </header>
      <footer>
        Special Thanks
        <ul>
          <li><a href="https://imestory.tistory.com/entry/gh-pages%EC%99%80-Github-Pages-%EC%BB%A4%EC%8A%A4%ED%85%80-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EC%82%BD%EC%A7%88%EA%B8%B0">Custom Domain Setting</a></li>
          <li><a href="https://jinhoko.com">JinhoKo</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
