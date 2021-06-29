import React from 'react'
import logo from '../beans_logo.svg';

const mainPage: React.FunctionComponent = props => {
  return <div>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      GMOBEAN's Personal Page on DEV!
    </p>
  </div>
};

export default mainPage;