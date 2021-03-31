import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {StateContext} from "../provider/StateProvider";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="nav">
      <ul id='nav-ul'>
      <Link to='/'>
          <li>Dashboard</li>
        </Link>
        <Link to='/UserInfo'>
          <li>Username</li>
        </Link>
        <Link to='/ColorPallete'>
          <li>Saved Color Pallete</li>
        </Link>
        <Link to='/ColorPicker'>
          <li>Color Picker</li>
        </Link>
        <Link to='/ChangePallete'>
          <li>Change Pallete Design</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
