import React, { useContext, useEffect, useState } from "react";
import {StateContext} from "../provider/StateProvider";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav">
      <ul id='nav-ul'>
        <Link to='/' style={{ textDecoration: 'none', color:'white' }}>
          <li >Dashboard</li>
          
        </Link>
        <Link to='/UserInfo' style={{ textDecoration: 'none', color:'white' }}>
          <li>Profile</li>
        </Link>
        <Link to='/ColorPalette' style={{ textDecoration: 'none', color:'white' }}>
          <li>Saved Color Palettes</li>
        </Link>
        <Link to='/ColorPicker' style={{ textDecoration: 'none', color:'white' }}>
          <li>Color Picker</li>
        </Link>
        {/* <Link to='/ChangePalette' style={{ textDecoration: 'none', color:'white' }}>
          <li>Change Palette Design</li>
        </Link> */}
      </ul>
    </div>
  );
};

export default NavBar;
