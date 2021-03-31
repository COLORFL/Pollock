import React, { useContext, useEffect, useState } from "react";
import {StateContext} from "../provider/StateProvider";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav">
      <ul id='nav-ul'>
        <Link to='/'>
          <li>Dashboard</li>
        </Link>
        <Link to='/UserInfo'>
          <li>Profile</li>
        </Link>
        <Link to='/ColorPalette'>
          <li>Saved Color Palette</li>
        </Link>
        <Link to='/ColorPicker'>
          <li>Color Picker</li>
        </Link>
        <Link to='/ChangePalette'>
          <li>Change Palette Design</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
