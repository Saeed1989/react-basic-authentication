import React from "react";
import "./App.css";
import { Jwtauth } from "./pages/jwtauth/Jwtauth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Oauthauth } from "./pages/oauthauth/Oauthauth";
import { UserProfile } from "./pages/userprofile/userprofile";
import { PrivateRoute } from './auth/PrivateRoute';

export function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header
        className="container p-3 mb-2 bg-dark text-white"
        style={{ maxWidth: 960 }}
      >
        <div className="container d-flex flex-column">
          <div className="row justify-content-center align-self-center">
            <div className="logo">
              <h1 className="header">React Basic Auth</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container flex-fill bg-light" style={{ maxWidth: 960 }}>
        <Router>
          <RouteContainer />
        </Router>
      </main>

      <footer
        className="container bg-dark text-center text-white"
        style={{ maxWidth: 960 }}
      >
        <div className="d-flex flex-column text-center p-3">
          <a
            class="text-white text-decoration-none"
            href="https://torunmon.com"
          >
            © 2021 Copyright: einao.torunmon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

function RouteContainer() {
  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/jwt">
          <Jwtauth />
        </Route>
        <Route path="/oauth">
          <Oauthauth />
        </Route>
        <PrivateRoute path="/userprofile" exact>
          <UserProfile />
        </PrivateRoute>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/jwt">JWT</Link>
              </li>
              <li>
                <Link to="/oauth">OAuth</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Switch>
    </div>
  );
}

export default App;
