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
    </div>
  );
}

export default App;
