import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../provider/StateProvider";


const UserInfo = () => {
  // useEffect(() => {
  //   fetch('/')
  // }, []);

  return (
    <div id="profile">
      <form>
        <input id="email" type="email" placeholder= "Email Address"/>
        <input id="name" type="text" placeholder= "Full Name"/>
        <input id="password" type="password" placeholder= "Password"/>
        <input id="fun_fact" type="text" placeholder= "Fun Fact"/>
      </form>
      <button> Save Changes </button>
      <button> Update Changes </button>
    </div>
  );
};

export default UserInfo;
