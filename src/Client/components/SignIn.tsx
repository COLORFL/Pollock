import React, { Component, useContext, useEffect, useState} from "react";
import EachPalette from './EachPalette';

const SignIn = () => {

  
  
  function login(){
// event.preventDefault();
 
  // ask if this user can go to next
  const userRequest = JSON.stringify({email: inputEmail, password: inputPassword});
  // console.log(userRequest);
  // do something with response that allows/denies user to move on
  console.log('user info', userRequest)
  fetch('/auth/signin', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: userRequest
  })
    .then(response => response.json())
    .then(result => {
      console.log('login info:', result);
      if (result){
        console.log('result****', result)
      } 
    })
    .catch(err => console.log('error sending the request:', err) )
}; 

  const handleLogin = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const inputEmail = email.innerText;
    const inputPassword = password.innerText;
  }

  return (
    <div>
      <form>
        <input id="email" type="email" placeholder= "Email Address" value='k@s.com' required/>
        <input id="password" type="password" placeholder= "Password" value='234' required/>
        <input type="submit" value="signin" />
      </form>
      <button type="reset" className="button">Reset Password</button>
      <button type="button" className="button">OAuth</button>
      <input id="submit" type="submit" className="button" value="Sign-in"/>
    </div>
  )
}

export default SignIn;