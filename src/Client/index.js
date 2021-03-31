import React, { Component } from 'react';
import { render } from 'react-dom';
import App from "./App.jsx";
import StateProvider from './provider/StateProvider';

render(
  
 
  <StateProvider>
    <App/>
  </StateProvider>, 
  document.querySelector('#root')
);
