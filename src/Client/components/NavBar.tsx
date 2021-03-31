import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {StateContext} from "../provider/StateProvider";

const NavBar = () => {
  return (
    <div>
      <ul id='nav'>
        <Link to="/userinfo"></Link>
        <li>Username</li>
        <li><Link to='/savedPallette'>Saved Color Pallet</Link></li>
        <li>Color Picker</li>
        <li>Change Pallet Design</li>
      </ul>
    </div>
  );
};

export default NavBar;
