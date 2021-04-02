import React,  {useState, useContext} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import UserInfo from "./components/UserInfo";
import ColorPalette from "./components/ColorPalette";
import ColorPaletteTwo from "./components/ColorPaletteTwo";
import ColorPicker from "./components/ColorPicker";
import { StateContext } from "./provider/StateProvider";




const App = () => {
	return (	
		<Router>
			<div id="app">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/Home" component={Dashboard} />
					<Route exact path="/UserInfo" component={UserInfo} />
					<Route exact path="/ColorPalette" component={ColorPaletteTwo} />
					<Route exact path="/ColorPicker" component={ColorPicker} />
				</Switch>
			</div>
	  </Router>
	)
};

export default App;
