import React from "react";
import App1 from './Tugas-10/App';
import App2 from './Tugas-11/App';
import App3 from './Tugas-12/App';
import App4 from './Tugas-13/Mhs';
import App5 from './Tugas-14/Mhs';
import App6 from './Tugas-15/Mhs';

import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import './Route.css';

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/tugas-10">Tugas 10</Link>
        </li>
        <li>
          <Link to="/tugas-11">Tugas 11</Link>
        </li>
        <li>
          <Link to="/tugas-12">Tugas 12</Link>
        </li>
        <li>
          <Link to="/tugas-13">Tugas 13</Link>
        </li>
        <li>
          <Link to="/tugas-14">Tugas 14</Link>
        </li>
        <li>
          <Link to="/tugas-15">Tugas 15</Link>
        </li>
      </ul>
    </>
  )
}

const Routes = () => {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/tugas-10">
          <App1 />
        </Route>
        <Route path="/tugas-11">
          <App2 />
        </Route>
        <Route exact path="/tugas-12">
          <App3 />
        </Route>
        <Route exact path="/tugas-13">
          <App4 />
        </Route>
        <Route exact path="/tugas-14">
          <App5 />
        </Route>
        <Route exact path="/tugas-15">
          <App6 />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;