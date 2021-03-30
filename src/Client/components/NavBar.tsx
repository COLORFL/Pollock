import React, {useContext, useEffect, useState} from "react";
import {StateContext} from "../provider/StateProvider";

const NavBar = () => {
   return (
       <div>
           <ul id='nav'>
           <li>Username</li>
           <li>Saved Color Pallet</li>
           <li>Color Picker</li>
           <li>Change Pallet Design</li>
           </ul>
       </div>
   )
}

export default NavBar;