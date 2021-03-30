import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/home' component={Header}/>  
					<Route path='/decks' component={Header}/>  
					<Route path='/deck' component={Header}/>  
					<Switch>
						<Route exact path='/' component={Auth}/>  
						<Route exact path='/home' component={AddCard}/>
						<Route exact path='/decks' component={Decks}/>
						<Route exact path='/deck' component={Deck}/>
						<Route exact path='/auth' component={Auth}/>
					</Switch>
				</div>
			</Router>
	)}
}

export default App;
