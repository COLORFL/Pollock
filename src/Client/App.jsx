import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
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
					<Route exact path="/" component={ColorPallete} />
				</Switch>
			</div>
	  </Router>
	)
};

export default App;
