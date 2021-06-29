import React from 'react';
import {Link} from 'react-router-dom';

const Header: React.FunctionComponent = props => {
  return <div>
    <ul>
      <li><Link to="/home">HOME</Link></li>
      <li><Link to="/project">PROJECT</Link></li>
      <li><Link to="/award">AWARD</Link></li>
      <li><Link to="/special">SPECIAL</Link></li>
    </ul>
  </div>
};

export default Header;