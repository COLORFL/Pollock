import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="nav">
      <ul id='nav-ul'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <li >Dashboard</li>
        </Link>
        <Link to='/UserInfo' style={{ textDecoration: 'none' }}>
          <li>Profile</li>
        </Link>
        <Link to='/ColorPalette' style={{ textDecoration: 'none' }}>
          <li>My Palettes</li>
        </Link>
        <Link to='/ColorPicker' style={{ textDecoration: 'none' }}>
          <li>Palette Creator</li>
        </Link>
        <li><a href="/logout" style={{ textDecoration: 'none', color:'white' }}>logout</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
