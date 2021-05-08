import React, { Component } from 'react';
import { render } from 'react-dom';
import App from "./App.tsx";
import StateProvider from './provider/StateProvider';

render(
  <StateProvider>
    <App/>
  </StateProvider>, 
  document.querySelector('#root')
);
//html landing page with login
//html register
//---> check auth
//-->redirected to our react app
