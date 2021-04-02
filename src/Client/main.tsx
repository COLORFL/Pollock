import React,  {useState, useContext} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import './style.css';
import { StateContext } from "./provider/StateProvider";
import SignIn from "./components/SignIn"
import App from "./App"

const Main = () => {
	const { 
    cookieMonster,
    setCookieMonster
  }: any = useContext(StateContext)

  const logout = () => {
    setCookieMonster('');
    fetch('/logout');
  }

return (
  <div id="Main">
      <Router>
        <Switch>
          <Route path="/" exact>
            {cookieMonster === '' ? (
              <Redirect to="/" />
              // redirect to sign up page
            ) : (
              <div>
                <h1>Homepage</h1>
                <Link to="/secret">Go to secret</Link>
                <br></br>
                <button onClick={login}>Log in</button>
              </div>
            )}
          </Route>
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/secret"
            logout={logout}
            component={Secret}
          />
          <Route path="*">
            <div>404 Not found </div>
          </Route>
        </Switch>
      </Router>
    </div>
)
}

export default Main;