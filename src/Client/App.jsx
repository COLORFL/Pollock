import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import UserInfo from "./components/UserInfo";
import ColorPallete from "./components/ColorPallete";
import ColorPicker from "./components/ColorPicker";
import ChangePalleteDesign from "./components/ChangePalleteDesign";



const App = () => {
	return (	
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/UserInfo" component={UserInfo} />
					<Route exact path="/ColorPallete" component={ColorPallete} />
					<Route exact path="/ColorPicker" component={ColorPicker} />
					<Route exact path="/ChangePallete" component={ChangePalleteDesign} />
				</Switch>
			</div>
	  </Router>
	)
};

export default App;
