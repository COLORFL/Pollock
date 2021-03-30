import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


const App = () => {
	return (	
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<SignIn />
					</Route>
					{/* <Route path="/signup">
						<SignUp />
					</Route> */}
				</Switch>
			</div>
	  </Router>
	)
};

export default App;
